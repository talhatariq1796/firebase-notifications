// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT-s5wulhtM1ZR8h7g56ws10tZa7kfuqw",
  authDomain: "notifications-firebase-bfd03.firebaseapp.com",
  projectId: "notifications-firebase-bfd03",
  storageBucket: "notifications-firebase-bfd03.appspot.com",
  messagingSenderId: "980013748727",
  appId: "1:980013748727:web:8989de304cfcb61e265ef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);