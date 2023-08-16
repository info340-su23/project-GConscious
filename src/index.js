import React from 'react';
import ReactDOM from 'react-dom/client';
import Data from './data/merged-cleaned-drugs.json';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

//import CSS
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB40wI2_w37-7lg7afoa0r88sIkbxryXdk",
  authDomain: "project-a5-f5b82.firebaseapp.com",
  databaseURL: "https://project-a5-f5b82-default-rtdb.firebaseio.com",
  projectId: "project-a5-f5b82",
  storageBucket: "project-a5-f5b82.appspot.com",
  messagingSenderId: "619794794031",
  appId: "1:619794794031:web:edcecb9fd8e7869592a8da"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App drugsList={Data} />
  </BrowserRouter>
);
