import ReactDOM from "react-dom/client";
import React from "react";
import App from "./React/1.jsx";

if (!window.reactRoot) {
  window.reactRoot = ReactDOM.createRoot(document.getElementById("root"));
}

window.reactRoot.render(<App />);
