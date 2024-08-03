// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_r-OL8TPqRYONadlefVWVEquAyrNBsaM",
  authDomain: "netflix-gpt-51013.firebaseapp.com",
  projectId: "netflix-gpt-51013",
  storageBucket: "netflix-gpt-51013.appspot.com",
  messagingSenderId: "453551710710",
  appId: "1:453551710710:web:449f486fa01455bf3da7d7",
  measurementId: "G-N6ZDYCZX0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()