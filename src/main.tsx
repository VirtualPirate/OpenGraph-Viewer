import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./main.css";

import { OGDataContextProvider } from "../context/ogdata.context";
import { ButtonStateContextProvider } from "../context/buttonstate.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OGDataContextProvider>
      <ButtonStateContextProvider>
        <App />
      </ButtonStateContextProvider>
    </OGDataContextProvider>
  </React.StrictMode>
);
