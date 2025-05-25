import { Routes, Route } from "react-router-dom";
import TOC from "./toc";
import Lab2 from "./lab2";
import Lab3 from "./lab3";
import Lab4 from "./lab4";

export default function Labs() {
  return (
    <div className="container-fluid">
      <h1>Labs</h1>
      <h3>Anissa Vaughn</h3>
      <TOC />
      <Routes>
        <Route path="lab2/*" element={<Lab2 />} />
        <Route path="lab3/*" element={<Lab3 />} />
        <Route path="lab4/*" element={<Lab4 />} />
      </Routes>
    </div>
  );
}
