import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes";
import reportWebVitals from "./reportWebVitals";
import { GeneroProvider } from "./contexts/generoContexts";
import { MoviesProvider } from "./contexts/moviesContexts"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoviesProvider>
    <GeneroProvider>
      <AppRoutes />
    </GeneroProvider>
    </MoviesProvider>
  </React.StrictMode>
);

reportWebVitals();
