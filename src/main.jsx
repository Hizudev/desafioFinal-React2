import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { Provider } from "./Context/ProyectContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <CssBaseline />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
