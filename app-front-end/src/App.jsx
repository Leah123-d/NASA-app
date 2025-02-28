import React from "react";
import './App.css'
import Navbar2 from './components/Navbar2.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import TestComp from './components/TestComp.jsx'
import { useState, useEffect } from 'react';

function App() {
  return (
    <>
      <Navbar2 />
      <Card />
      <Footer />
      <TestComp />
    </>
  )
}

export default App
