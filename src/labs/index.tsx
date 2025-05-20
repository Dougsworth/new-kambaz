import Lab1 from './lab1';
import { Route, Routes, Navigate } from 'react-router-dom';
import TOC from './toc';
import Lab2 from './lab2';
import Lab3 from './lab3';



export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs 2222</h1>
      <h3>Anissa Vaughn</h3>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="lab1" />} />
        <Route path="lab1" element={<Lab1 />} />
        <Route path="lab2/*" element={<Lab2 />} />
        <Route path="lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}