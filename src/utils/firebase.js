// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm151U5qed0ZmVYtRtwuMYO1yuOq_MTlU",
  authDomain: "netflix-gpt-a1977.firebaseapp.com",
  projectId: "netflix-gpt-a1977",
  storageBucket: "netflix-gpt-a1977.appspot.com",
  messagingSenderId: "810199168119",
  appId: "1:810199168119:web:e79a028e2c235d1d3c8272",
  measurementId: "G-4QFYX45HFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);