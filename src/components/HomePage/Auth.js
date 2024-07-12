
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTE-NQC2Y9TUWZVRhh69d7IfnMzY5fcTE",
    authDomain: "gssoc-88418.firebaseapp.com",
    projectId: "gssoc-88418",
    storageBucket: "gssoc-88418.appspot.com",
    messagingSenderId: "446275385089",
    appId: "1:446275385089:web:e8aadf7c9e9fda07720d00",
    measurementId: "G-TDEGW403LX"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
