// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmd1ZJYqLSNEFasewcNd7FQ304Cq63AMg",
  authDomain: "svuicc-780bc.firebaseapp.com",
  projectId: "svuicc-780bc",
  storageBucket: "svuicc-780bc.firebasestorage.app",
  messagingSenderId: "1010857788236",
  appId: "1:1010857788236:web:116bd6abde84e898f985e9",
  measurementId: "G-93421EKQ68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);