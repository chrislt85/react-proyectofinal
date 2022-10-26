import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSukMKLN_BUF3S9gFjnWzwJT4n3nAqCjU",
  authDomain: "react-proyectofinal.firebaseapp.com",
  projectId: "react-proyectofinal",
  storageBucket: "react-proyectofinal.appspot.com",
  messagingSenderId: "594110183635",
  appId: "1:594110183635:web:dbfee744c7a72212e63c26"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

