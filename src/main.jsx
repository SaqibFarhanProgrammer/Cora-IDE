import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./context/context.jsx";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { AI_Context_provider } from "./AI/context_AI/Ai_Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <AI_Context_provider >
          <App />
        </AI_Context_provider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
