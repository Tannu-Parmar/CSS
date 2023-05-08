import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Data from "./Data.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App Data={Data} />
  </React.StrictMode>
);
