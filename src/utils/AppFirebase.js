// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcsQYNLXVwX43K3Ka0lhnNg3um05H9Gwg",
  authDomain: "allotrix-app.firebaseapp.com",
  projectId: "allotrix-app",
  storageBucket: "allotrix-app.appspot.com",
  messagingSenderId: "248319517728",
  appId: "1:248319517728:web:37c40e430bfb77ca1d0845",
  measurementId: "G-MBLRD7XT00"
};

const allotrixApp = initializeApp(firebaseConfig, "allotrixApp");
const allotrixDb = getFirestore(allotrixApp);
const allotrixRealDb = getDatabase(allotrixApp);

export { allotrixDb, allotrixApp, allotrixRealDb };