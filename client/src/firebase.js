// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-57b97.firebaseapp.com",
  projectId: "mern-blog-57b97",
  storageBucket: "mern-blog-57b97.appspot.com",
  messagingSenderId: "566198895528",
  appId: "1:566198895528:web:183441c4ee63099c2ad39d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
