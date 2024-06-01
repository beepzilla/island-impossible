// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, db } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

const handleUserData = async (user) => {
  if (!navigator.onLine) {
    console.error("Client is offline");
    return;
  }

  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await setDoc(userRef, { uid: user.uid, email: user.email, hearts: 5, xp: 0, progress: {} });
  }
};

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("User is signed in:", user);
        setUser(user);
        await handleUserData(user);
        setLoading(false);
      } else {
        console.log("No user signed in");
        setLoading(false);
      }
    });
    return unsubscribe;
  }, [navigate]);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await handleUserData(result.user);
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.log('The popup was closed by the user.');
      } else {
        setError(error.message);
      }
    }
  };

  const value = {
    user,
    signInWithGoogle,
    error,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
