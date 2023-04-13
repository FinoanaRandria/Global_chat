
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2xh0fD3C2R--JKLzUbpko_mUawgEqQUU",
  authDomain: "chat-e4365.firebaseapp.com",
  projectId: "chat-e4365",
  storageBucket: "chat-e4365.appspot.com",
  messagingSenderId: "181368142809",
  appId: "1:181368142809:web:fa04fa873c1aa5c80637c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)