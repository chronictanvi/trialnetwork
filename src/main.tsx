import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DriftDBProvider } from "driftdb-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DriftDBProvider api="https://api.jamsocket.live/db/FVjINf4FPDuWZcNXPlpn/">
      <App />
    </DriftDBProvider>
  </React.StrictMode>
);
