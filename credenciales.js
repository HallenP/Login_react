// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS0Bm_T_FHzl5WBKFKrEGSgztrE0gebBk",
  authDomain: "milogin-adaaf.firebaseapp.com",
  projectId: "milogin-adaaf",
  storageBucket: "milogin-adaaf.firebasestorage.app",
  messagingSenderId: "96242185725",
  appId: "1:96242185725:web:ced445c604cb30ffc61594"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase