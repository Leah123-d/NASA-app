import React from "react";
import './App.css'
import Navbar2 from './components/Navbar2.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import TestComp from './components/TestComp.jsx'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const [info, setInfo] = useState('');

  const connectToBackend = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }


//  function NASADatafromBE (){
//   useEffect(() => {
//     fetch('/api/NASAData')
//     .then((res) => res.json())
//     .then (data => {
//       console.log(data);
//     })
//     // .catch(error => {
//     //   console.log(new Error)
//     // });
//   }, []);
// }
  




  // const handleClick =() => {
  // } missing the part to connect the calls from the front end to display on the front end, I might need a get request

  //I'll need to figure out where to keep the files and how they are communicating with each other


  return (
    <>
      {/* <h1 className="text-3xl font-bold underline" >Hello World</h1> */}
      {/* Render the newly fetched data inside data */}

      <div className="App">
                    <h1>React Website with an Express backend</h1>
                    {/* <button  onClick={NASADatafromBE}>
                    Send Request to Backend
                    </button> */}
                    <p>{info}</p>
                    
                    {/* button is working, but now i have to see how I can get a response or if my env variables are reading correctly */}
                </div>

      <Navbar2 />
      <Card />
      <Footer />
      <TestComp />
    </>
  )
}

export default App
