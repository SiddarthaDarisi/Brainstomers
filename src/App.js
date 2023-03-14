import Landing from './compon/landing.js';
import Login from './compon/login.js';
import Dashboard from './compon/Dashboard.js';
import Pricing from './compon/PricingPage.js';
import Curriculum from './compon/curriculum.js';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';



function App() {

  return (

    <div className="App">


      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login navi />} />
        <Route path="PricingPage" element={<Pricing />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/PricingPage" element={<Pricing  />} />
      </Routes>

    </div>
  );


}

export default App;