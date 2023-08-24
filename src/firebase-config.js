import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD0oARZ5280UKlf4yZoXWWLFN5pWoN11z4",
    authDomain: "healthcare-cd8a8.firebaseapp.com",
    projectId: "healthcare-cd8a8",
    storageBucket: "healthcare-cd8a8.appspot.com",
    messagingSenderId: "389171546527",
    appId: "1:389171546527:web:89e225abe71107843695aa",
    measurementId: "G-XMHHLQ53R1"
  }
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app);