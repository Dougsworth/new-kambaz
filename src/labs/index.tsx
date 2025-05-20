import Lab1 from './Lab1';
import { Route, Routes, Navigate } from 'react-router-dom';
import TOC from './toc';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import Lab4 from './Lab4';
import store from "./store";
import { Provider } from "react-redux";



export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Labs</h1>
        <h3>Anissa Vaughn</h3>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="lab1" />} />
          <Route path="lab1" element={<Lab1 />} />
          <Route path="lab2/*" element={<Lab2 />} />
          <Route path="lab3/*" element={<Lab3 />} />
          <Route path="lab4/*" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
  );
}