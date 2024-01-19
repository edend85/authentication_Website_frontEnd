// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAuth,
  FacebookAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoMtrDWFlW1cc9cpTCDg0_wBhDX2Sqw4E",
  authDomain: "authenticationwebsite-6901f.firebaseapp.com",
  projectId: "authenticationwebsite-6901f",
  storageBucket: "authenticationwebsite-6901f.appspot.com",
  messagingSenderId: "815653281370",
  appId: "1:815653281370:web:848fa745d2fa8d5c950263",
  measurementId: "G-L6Y5CGVRRT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'it';
const provider = new FacebookAuthProvider();
export {
  auth,
  provider
}