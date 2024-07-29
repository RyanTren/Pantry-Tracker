// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsYUWoDZx_qLSIuBOu_S_d04jGXxJ6-EM",
  authDomain: "hspantryapp-48163.firebaseapp.com",
  projectId: "hspantryapp-48163",
  storageBucket: "hspantryapp-48163.appspot.com",
  messagingSenderId: "628251213215",
  appId: "1:628251213215:web:23793c76a9aab8829e11aa",
  measurementId: "G-XB10KT2PBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore}