// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNeKF2snHSRvDJSUvDNaIuBNvpp_LkxB0",
  authDomain: "mern-book-inventory-bf43e.firebaseapp.com",
  projectId: "mern-book-inventory-bf43e",
  storageBucket: "mern-book-inventory-bf43e.appspot.com",
  messagingSenderId: "797490375463",
  appId: "1:797490375463:web:9fa1dc862e62b7ca141702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;