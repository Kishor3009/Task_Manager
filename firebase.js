import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnTzrRFnH4JtW2ovBfhhAp5cpxKVkADoQ",
  authDomain: "task-management-4fe70.firebaseapp.com",
  projectId: "task-management-4fe70",
  storageBucket: "task-management-4fe70.appspot.com",
  messagingSenderId: "697666115878",
  appId: "1:697666115878:web:ab2f15a36a21712c81c9e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);