import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './pages'
import Detail from './pages/detail'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/films/:id" element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
