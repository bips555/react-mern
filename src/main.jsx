import React from "react";
import ReactDOM from "react-dom/client";
const rootELem = ReactDOM.createRoot(document.getElementById("root"));
import HomePage from "./pages/home/home.page";
rootELem.render(
  <React.StrictMode>
    <HomePage title="home page"></HomePage>
  </React.StrictMode>
);
// react strict mode mounts content twice
// strict mode is always disabled while in production build
