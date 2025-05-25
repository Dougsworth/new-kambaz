// code provided by Tisha
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./kambaz/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

/*

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";


createRoot(document.getElementById("root")!).render(
 <StrictMode>
   <App />
 </StrictMode>
);

*/
