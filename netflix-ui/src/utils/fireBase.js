// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABmKmlB_tYbXNNbTRAljQtdVvbjkCZxOo",
  authDomain: "netflixgpt-bb98e.firebaseapp.com",
  projectId: "netflixgpt-bb98e",
  storageBucket: "netflixgpt-bb98e.firebasestorage.app",
  messagingSenderId: "551096995938",
  appId: "1:551096995938:web:3935bfd58bed3c89b1413b",
  measurementId: "G-P6D12WXBHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();