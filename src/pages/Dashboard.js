// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import Map from '../components/UI/Map';

const Dashboard = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        console.log("Fetching data for user:", user.uid);
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          console.log("User data fetched:", userSnap.data());
          setUserData(userSnap.data());
        } else {
          console.log("No user data found");
        }
      }
    };
    fetchUserData();
  }, [user]);

  if (!user) {
    return <div>Redirecting to start screen...</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Map</h1>
      <Map />
    </div>
  );
};

export default Dashboard;
