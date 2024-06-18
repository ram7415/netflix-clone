// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB5pCvAVIO1xY04nF4WrZE_IM1Etjn21c",
  authDomain: "netflix-clone-41baa.firebaseapp.com",
  projectId: "netflix-clone-41baa",
  storageBucket: "netflix-clone-41baa.appspot.com",
  messagingSenderId: "923948859048",
  appId: "1:923948859048:web:1836eadc7d9fa934430c9d",
  measurementId: "G-B8WEN47JDK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
