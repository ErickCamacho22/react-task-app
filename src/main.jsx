import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskContextProvide } from "./context/TaskContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvide>
      <App />
    </TaskContextProvide>
  </React.StrictMode>
);
