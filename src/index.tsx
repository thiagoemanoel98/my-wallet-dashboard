import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// O react fica colocando as telas no "root" do index.html

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
