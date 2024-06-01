import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmjDgZ-IN5fTQ1yjIoJOgsoO4UcSqUWbo",
  authDomain: "quizap-f6335.firebaseapp.com",
  projectId: "quizap-f6335",
  storageBucket: "quizap-f6335.appspot.com",
  messagingSenderId: "55306357059",
  appId: "1:55306357059:web:59bdd1c6115b220b2f07f6",
  measurementId: "G-GDHRDMEZC6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
