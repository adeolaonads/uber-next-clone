// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiySkTHbI5mmpOoyccudT6foZD1yTKiGQ",
  authDomain: "uber-next-clone-live-97609.firebaseapp.com",
  projectId: "uber-next-clone-live-97609",
  storageBucket: "uber-next-clone-live-97609.appspot.com",
  messagingSenderId: "791790801077",
  appId: "1:791790801077:web:3cb8c832a8c5aab3e36efc",
  measurementId: "G-9TE2HPS5P1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }