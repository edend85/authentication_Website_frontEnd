import { initializeApp } from "firebase/app";
import { getAuth,FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYK7H3F4AVG1OuFmsJOFPqP1_kLl0DazI",
  authDomain: "socialmedialogin-ed0b2.firebaseapp.com",
  projectId: "socialmedialogin-ed0b2",
  storageBucket: "socialmedialogin-ed0b2.appspot.com",
  messagingSenderId: "182123577008",
  appId: "1:182123577008:web:7c5c152819a0ef6ae1c575",
  measurementId: "G-5MNXL1YNCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new FacebookAuthProvider();