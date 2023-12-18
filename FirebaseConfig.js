import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD4WNnKsZQ0EIc7nUcRL43DAvUFdC_PRpM",
  authDomain: "nss-bd19b.firebaseapp.com",
  projectId: "nss-bd19b",
  storageBucket: "nss-bd19b.appspot.com",
  messagingSenderId: "1020853498858",
  appId: "1:1020853498858:web:e4106252e3eb3b6c927893",
  measurementId: "G-9ZHHKRRG4N"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP)
