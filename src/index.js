import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="container mx-auto bg-white px-4 py-2 rounded border-solid border-2">
      <div className="flex flex-col items-center justify-center justify-items-center">
        <div className="text-xl font-bold">
          Tic Tac Toe
        </div>
        <div className="w-full">
          <App />
        </div>
      </div>
    </div>
    
  </StrictMode>
);