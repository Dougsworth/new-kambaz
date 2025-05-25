import Labs from "./labs";
import Kambaz from "./kambaz";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./kambaz/styles.css";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kambaz" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
