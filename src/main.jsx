import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import Routing from "./router/routing.config.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css"
const rootELem = ReactDOM.createRoot(document.getElementById("root"));
rootELem.render(
  <React.StrictMode>
  <Routing/>
  </React.StrictMode>
);
