<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
>>>>>>> 7976c287a14b44f79f86430665dc749e58898016

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>
);
=======
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
>>>>>>> 7976c287a14b44f79f86430665dc749e58898016
