import React from "react";
import ReactDOM from "react-dom/client";
/** Local Modules */
import App from "./app";
/** Styles */
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
