// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASHbXMluwfXxFYlUZ16IOlGHOj1343XY8",
  authDomain: "netflix-chat-gpt.firebaseapp.com",
  projectId: "netflix-chat-gpt",
  storageBucket: "netflix-chat-gpt.firebasestorage.app",
  messagingSenderId: "752679627763",
  appId: "1:752679627763:web:fa80f1fcc59c3251960086",
  measurementId: "G-MYHYKXYRMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();