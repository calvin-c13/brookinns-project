// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-fdf7d.firebaseapp.com",
    projectId: "mern-estate-fdf7d",
    storageBucket: "mern-estate-fdf7d.appspot.com",
    messagingSenderId: "112862973313",
    appId: "1:112862973313:web:726b22f066866c38ceac80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);