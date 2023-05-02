// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVMKs9wnnemGstOM_teQCEphcnYmEjjak",
  authDomain: "food-recipe-auth.firebaseapp.com",
  projectId: "food-recipe-auth",
  storageBucket: "food-recipe-auth.appspot.com",
  messagingSenderId: "148721232369",
  appId: "1:148721232369:web:cbdd3f85d6d909cfb73c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;