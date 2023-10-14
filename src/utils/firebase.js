// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUQNIyYcK8ZKYYPN8gVoI9lnk0cxvYwdI",
  authDomain: "netflixgpt-81257.firebaseapp.com",
  projectId: "netflixgpt-81257",
  storageBucket: "netflixgpt-81257.appspot.com",
  messagingSenderId: "336183375443",
  appId: "1:336183375443:web:8e4824b3c2a78c405a38a6",
  measurementId: "G-WJBTYRN7KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();