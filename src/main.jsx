import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SnackbarProvider } from "notistack";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={4}>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);