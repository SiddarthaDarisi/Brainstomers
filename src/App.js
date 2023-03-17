import Landing from './compon/landing.js';
import Login from './compon/login.js';
import Dashboard from './compon/Dashboard.js';
import Pricing from './compon/PricingPage.js';
import Pricing2 from './compon/PricingPage2.js';
import Curriculum from './compon/curriculum.js';
import Contact from './compon/Contact.js';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import { CssBaseline } from '@mui/material';



function App() {

  return (

    <div className="App">
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/Login" element={<Login navi />} /> */}
        {/* <Route path="/Dashboard/PricingPage" element={<Pricing />} /> */}
        <Route path="/Curriculum" element={<Curriculum />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        <Route path="/PricingPage" element={<Pricing2 />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </div>
  );


}

export default App;