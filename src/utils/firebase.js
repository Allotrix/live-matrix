import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDcsQYNLXVwX43K3Ka0lhnNg3um05H9Gwg",
  authDomain: "allotrix-app.firebaseapp.com",
  projectId: "allotrix-app",
  storageBucket: "allotrix-app.appspot.com",
  messagingSenderId: "248319517728",
  appId: "1:248319517728:web:37c40e430bfb77ca1d0845",
  measurementId: "G-MBLRD7XT00"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };