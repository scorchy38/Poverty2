import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDGFLc72MAf_p2pZLACWboSGsnwXOMDEOQ",
  authDomain: "portfolio-eac01.firebaseapp.com",
  databaseURL: "https://portfolio-eac01.firebaseio.com",
  projectId: "portfolio-eac01",
  storageBucket: "portfolio-eac01.appspot.com",
  messagingSenderId: "901854854156",
  appId: "1:901854854156:web:5a2b7e0181c29a30cdc229",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
