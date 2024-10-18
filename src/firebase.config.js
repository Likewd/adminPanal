// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvHVF_PvIx_V_kLfnUBV1Ob0EprjA9U4s",
  authDomain: "leavemanament.firebaseapp.com",
  projectId: "leavemanament",
  storageBucket: "leavemanament.appspot.com",
  messagingSenderId: "918429952252",
  appId: "1:918429952252:web:d7c6bee0d0a025da584f79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, app, getToken, onMessage };
