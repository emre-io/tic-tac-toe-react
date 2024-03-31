import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="container mx-auto bg-white px-4 py-2 rounded border-solid border-2">
      <div className="text-xl font-bold text-center">
        Tic Tac Toe
      </div>
      <div className="w-full">
        <App />
      </div>
    </div>
    
  </StrictMode>
);