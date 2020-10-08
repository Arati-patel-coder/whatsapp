import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQ87VgwJbAyZIPLykDEQu6AmXAskbv-_o",
  authDomain: "whatsapp-5e10f.firebaseapp.com",
  databaseURL: "https://whatsapp-5e10f.firebaseio.com",
  projectId: "whatsapp-5e10f",
  storageBucket: "whatsapp-5e10f.appspot.com",
  messagingSenderId: "481872282734",
  appId: "1:481872282734:web:62a5dc18bed094be5e127f",
  measurementId: "G-QFCMJVHRVY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
