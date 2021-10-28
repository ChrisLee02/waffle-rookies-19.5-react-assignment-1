import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StudentContextProvider } from "./context/StudentsContext";
import {NetworkContextProvider} from './context/NetworkContext';

import { ToastContainer } from "react-toastify";

ReactDOM.render(

  <StudentContextProvider>
    <NetworkContextProvider>
      <App />
      <ToastContainer position="bottom-right" />
    </NetworkContextProvider>
  </StudentContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
