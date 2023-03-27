// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1S04LrDtFw408yEERg0LX9-68Jshh388",
  authDomain: "instagram-clone-a9722.firebaseapp.com",
  projectId: "instagram-clone-a9722",
  storageBucket: "instagram-clone-a9722.appspot.com",
  messagingSenderId: "869074888371",
  appId: "1:869074888371:web:c2e105c126d2886ac2f2c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};