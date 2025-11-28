// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVzIjqv5FsG_kI7W6K2x5vTTltUCqwnoE",
    authDomain: "testing01-87fd0.firebaseapp.com",
    projectId: "testing01-87fd0",
    storageBucket: "testing01-87fd0.firebasestorage.app",
    messagingSenderId: "150237125816",
    appId: "1:150237125816:web:58a9a6fc77bf09d8ebe84d",
    measurementId: "G-8DHGEQ5ERN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)