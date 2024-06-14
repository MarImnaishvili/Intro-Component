import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalSTyles from "./Styled Component/GlobalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalSTyles />
    <App />
  </React.StrictMode>
);
