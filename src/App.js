import Landing from './compon/landing.js';
import Login from './compon/login.js';
import Pricing from './compon/pricing.js';
import Curriculum from './compon/curriculum.js';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';

import Topbar from "./compon/topbar.js"
function App() {
  return (
    <div className="App">
      <Topbar/>

       <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
      </div>
      );
      

}

export default App;