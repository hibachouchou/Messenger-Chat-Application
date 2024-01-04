// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7yVeNJ-qgvk-zBAZZACyqFKLOeetCWLI",
  authDomain: "messenger-chat-applicati-118ff.firebaseapp.com",
  projectId: "messenger-chat-applicati-118ff",
  storageBucket: "messenger-chat-applicati-118ff.appspot.com",
  messagingSenderId: "874798253456",
  appId: "1:874798253456:web:d0be90f265dfd07012df15",
  measurementId: "G-G686GQXBDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);