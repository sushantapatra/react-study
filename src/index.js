import React from "react";
import createRoot from "react-dom";
import { BrowserRouter } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';

createRoot.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));