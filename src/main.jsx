import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// To use Routing 
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* without this Routes dont work. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
