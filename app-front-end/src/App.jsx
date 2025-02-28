import React from "react";
import './App.css'
import Navbar2 from './components/Navbar2.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from 'react';

function App() {
  
  return (
    <>

      {/* <h1 className="text-3xl font-bold underline" >Hello World</h1> */}
      {/* Render the newly fetched data inside data */}

      <div className="App">
        <h1>React Website with an Express backend</h1>
        <button  onClick={NASADatafromBE}>
        Send Request to Backend
        </button>
        <p>{info}</p>
        
        {/* button is working, but now i have to see how I can get a response or if my env variables are reading correctly */}
      </div>



      <Navbar2 />
      <Card />
      <Footer />
    </>
  )
}

export default App
