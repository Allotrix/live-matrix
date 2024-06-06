// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDymSv7NIZufePM27ZXVf97KDdwb9QxY8s",
  authDomain: "mun-automator.firebaseapp.com",
  databaseURL: "https://mun-automator-default-rtdb.firebaseio.com",
  projectId: "mun-automator",
  storageBucket: "mun-automator.appspot.com",
  messagingSenderId: "536970944281",
  appId: "1:536970944281:web:c82c6174ef9a816124af88",
  measurementId: "G-B7EDJMNPHV"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };