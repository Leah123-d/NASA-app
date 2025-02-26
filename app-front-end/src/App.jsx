import './App.css'
import Navbar2 from './components/Navbar2.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const connectToBackend = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }


  return (
    <>
      {/* <h1 className="text-3xl font-bold underline" >Hello World</h1> */}
      <div className="App">
      <h1>React Website with an Express backend</h1>
      <button  onClick={connectToBackend}>
        Send Request to Backend

      </button>
      {/* Render the newly fetched data inside data */}
      <p>{data}</p>
    </div>
      <Navbar2 />
      <Card />
      <Footer />
    </>
  )
}

export default App
