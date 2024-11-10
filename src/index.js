import React from "react";
import ReactDoom from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");

const root = ReactDoom.createRoot(el);

root.render(<App />);
