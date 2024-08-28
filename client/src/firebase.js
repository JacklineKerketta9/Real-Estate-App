// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ccf9c.firebaseapp.com",
  projectId: "real-estate-ccf9c",
  storageBucket: "real-estate-ccf9c.appspot.com",
  messagingSenderId: "864808194060",
  appId: "1:864808194060:web:1b829ae18f32e460f81e29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);