// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEAPI,
  authDomain: "fir-crud-871c1.firebaseapp.com",
  projectId: "fir-crud-871c1",
  storageBucket: "fir-crud-871c1.appspot.com",
  messagingSenderId: "443103960837",
  appId: "1:443103960837:web:d321eb99d9bd4d6d62216c",
  measurementId: "G-L7WMKQVL93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

export default db