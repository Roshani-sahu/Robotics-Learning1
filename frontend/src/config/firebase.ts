import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7-GDXMNFMg1s3Ljjtlokq4eF83yTOh0E",
  authDomain: "course-selling-platform-b72ed.firebaseapp.com",
  projectId: "course-selling-platform-b72ed",
  storageBucket: "course-selling-platform-b72ed.firebasestorage.app",
  messagingSenderId: "185626997777",
  appId: "1:185626997777:web:53952a8e9b649dc0f4edb0",
  measurementId: "G-BEM5XQ2DS4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;