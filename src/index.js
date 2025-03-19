import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import AppImmer from "./AppImmer";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <AppImmer />
  </StrictMode>
);
