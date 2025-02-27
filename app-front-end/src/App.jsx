import React from "react";
import './App.css'
import Navbar2 from './components/Navbar2.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react';
import dotenv from 'dotenv';

function App() {
  const { authToken } = process.env;
  const [data, setData] = useState('');

  async function fetchData() {
    try{
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${authToken}`) //get the URL and pass it to the fetch function as a string
      //once the fetch resolves we have to check if the response is okay
      if(!response.ok){
        throw new Error("Media not found");
      }
      const data = await response.json();//the response is converted to json and this returns a promise 
      console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }

  const connectToBackend = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }

  // const handleClick =() => {
  // } missing the part to connect the calls from the front end to display on the front end, I might need a get request


  return (
    <>
      {/* <h1 className="text-3xl font-bold underline" >Hello World</h1> */}
      {/* Render the newly fetched data inside data */}

      <div className="App">
                    <h1>React Website with an Express backend</h1>
                    <button  onClick={connectToBackend}>
                    Send Request to Backend
                    </button>
                    <p>{data}</p>

                    <input type="text" id="media-title" placeholder="enter title"/>
                    <button onClick={fetchData}>Fetch Data</button>
                </div>

      <Navbar2 />
      <Card />
      <Footer />
    </>
  )
}

export default App
