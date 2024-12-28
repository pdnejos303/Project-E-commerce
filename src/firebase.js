// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyC8E9vH5wkTbNSsYauDicTYIn7MYhCOE",
  authDomain: "my-ecommerce-app-8dd08.firebaseapp.com",
  projectId: "my-ecommerce-app-8dd08",
  storageBucket: "my-ecommerce-app-8dd08.firebasestorage.app",
  messagingSenderId: "838260095989",
  appId: "1:838260095989:web:1dae01bf99c87f4751bebc",
  measurementId: "G-40RMTQ34SW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
