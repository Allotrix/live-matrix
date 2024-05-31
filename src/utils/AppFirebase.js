// Import the functions you need from the SDKs you need
const { initializeApp } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
const { getFirestore } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js');
const { getDatabase, get, ref, onValue, off, update } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js');

// const firebaseConfig = {
//   apiKey: "AIzaSyDcsQYNLXVwX43K3Ka0lhnNg3um05H9Gwg",
//   authDomain: "allotrix-app.firebaseapp.com",
//   projectId: "allotrix-app",
//   storageBucket: "allotrix-app.appspot.com",
//   messagingSenderId: "248319517728",
//   appId: "1:248319517728:web:37c40e430bfb77ca1d0845",
//   measurementId: "G-MBLRD7XT00"
// };

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

const allotrixApp = initializeApp(firebaseConfig, "allotrixApp");
const allotrixDb = getFirestore(allotrixApp);
const allotrixRealDb = getDatabase(allotrixApp);

export { allotrixDb, allotrixApp, allotrixRealDb, get, ref, onValue, off,  update};