// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC961ZL-_14LnQbB8wsQkqm1n3OdPH724M",
  authDomain: "netflixgpt-4c7e2.firebaseapp.com",
  projectId: "netflixgpt-4c7e2",
  storageBucket: "netflixgpt-4c7e2.appspot.com",
  messagingSenderId: "865399696580",
  appId: "1:865399696580:web:6e5bf82e1b7a740f3fad91",
  measurementId: "G-XSRFH9KQSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();