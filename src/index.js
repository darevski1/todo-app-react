import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import "./App.css"

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
document.getElementById("root"))