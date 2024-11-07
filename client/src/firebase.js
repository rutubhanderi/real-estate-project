// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-38ce4.firebaseapp.com",
  projectId: "mern-estate-38ce4",
  storageBucket: "mern-estate-38ce4.firebasestorage.app",
  messagingSenderId: "1001721648582",
  appId: "1:1001721648582:web:e97cfeacaba16ec4d98ec7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);