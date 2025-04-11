// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";
import {getStorage}  from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "urgentcash-e71b7.firebaseapp.com",
  projectId: "urgentcash-e71b7",
  storageBucket: "urgentcash-e71b7.firebasestorage.app",
  messagingSenderId: "156087825320",
  appId: "1:156087825320:web:614161126f5ed82550639d"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db , storage}