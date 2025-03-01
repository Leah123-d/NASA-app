import React from "react";
import './App.css'
import Navbar2 from './components/Navbar2.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from 'react';

function App() {

  const[date, setDate] = useState(""); //state to store the user's input
  const[archiveData, setArchiveData] = useState(null);
  const[APOD, setAPOD] = useState([]);
  //We are fetching the data that is at the url /api which at the backend is connection to the NASA API
  useEffect(() => {
    const FetchAPOD = async () => { 
    try {
      const res = await fetch('/api');
      const data = await res.json();
      console.log("APOD Data:", data)
      setAPOD(data);
    } catch(error) {
      console.error('Error:', error);
    }
  };
  FetchAPOD(); }, []);

  //We are fetching the data that is at the url /api/archives which at the backend is connection to the NASA API archives
  
  //
  const fetchArchive = async (e) => {
		e.preventDefault();
    try{
    const response = await fetch(`/api/archives?date=${date}`); 
    const data = await response.json();
    return setArchiveData(data); //store data in state 
    }catch(error){
    console.error("error fetching data: ", error)
  }}

	const handleChange = (e) => {
		e.preventDefault();
		setDate(e.target.value);
	}
  
  return (
    <>
      <Navbar2 
			date={date}
			handleChange = {handleChange}
			fetchArchive = {fetchArchive}
			/>
      <Card
        archiveData = {archiveData}
        APOD = {APOD} />
      <Footer
      archiveData = {archiveData}
      APOD = {APOD}
       />
    </>
  )
}

export default App
