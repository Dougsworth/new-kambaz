import Labs from "./Labs";
import Kambaz from "./Kambaz";
import store from "./Kambaz/store";
import { Provider } from "react-redux";

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
  <HashRouter>
    <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="kambaz" />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </Provider>
  </HashRouter> );}