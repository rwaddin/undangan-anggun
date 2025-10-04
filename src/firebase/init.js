import { initializeApp } from "firebase/app";


// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDAudP3oJGcvKpO8TObrsTfGCjLgj8JTDc",
  authDomain: "undangan-nikah-online.firebaseapp.com",
  databaseURL: "https://undangan-nikah-online-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "undangan-nikah-online",
  storageBucket: "undangan-nikah-online.appspot.com",
  messagingSenderId: "850299835591",
  appId: "1:850299835591:web:0bf5cd1ffd948007969ae2",
  measurementId: "G-QVG2K74E7Z"
};

export const app = initializeApp(firebaseConfig);
