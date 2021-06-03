import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
 firebase.initializeApp({
     apiKey: "AIzaSyCr4KIK5osFQudcS15XyEO6LRHQfVlaCvY",
    authDomain: "bikeapp-6ddcc.firebaseapp.com",
    projectId: "bikeapp-6ddcc",
    storageBucket: "bikeapp-6ddcc.appspot.com",
    messagingSenderId: "188259840119",
    appId: "1:188259840119:web:c263798db5369d875d1672",
    measurementId: "G-QTN7TW0D1Q"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
