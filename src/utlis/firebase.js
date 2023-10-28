// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4vJdFb_0IVZXQxy_cUCW3yAOb34V0gCE",
  authDomain: "netflixgpt-84971.firebaseapp.com",
  projectId: "netflixgpt-84971",
  storageBucket: "netflixgpt-84971.appspot.com",
  messagingSenderId: "1088551606637",
  appId: "1:1088551606637:web:b8a4ff610b334f4367e264",
  measurementId: "G-0J6Z4LDQJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
