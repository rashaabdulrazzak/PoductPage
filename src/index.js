import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PrimeReactProvider } from "primereact/api";
const root = ReactDOM.createRoot(document.getElementById("root"));
const value = {
  appendTo: "self",
};
root.render(
  <PrimeReactProvider value={value}>
    <App />
  </PrimeReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
