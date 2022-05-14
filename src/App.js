import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./Start"
import Content from "./Content";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/game" element={<Content/>} />
      </Routes>
    </BrowserRouter>
  );
}