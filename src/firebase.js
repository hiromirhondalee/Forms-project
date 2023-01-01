// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ96No6D_OekJ8Oa_MRcUP45NAdjk4UCM",
  authDomain: "react-forms-aaff2.firebaseapp.com",
  databaseURL: "https://react-forms-aaff2-default-rtdb.firebaseio.com",
  projectId: "react-forms-aaff2",
  storageBucket: "react-forms-aaff2.appspot.com",
  messagingSenderId: "803804500245",
  appId: "1:803804500245:web:598fe6396edede7315991c",
  measurementId: "G-3BTVQERVQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);