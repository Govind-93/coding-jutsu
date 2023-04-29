// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSERaF854gogeimxEyLFnSeaHXs4jRjaY",
  authDomain: "coding-jutsu.firebaseapp.com",
  projectId: "coding-jutsu",
  storageBucket: "coding-jutsu.appspot.com",
  messagingSenderId: "935077145344",
  appId: "1:935077145344:web:05f33785bace9b70d921e5",
  measurementId: "G-VHHDDKXP0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);