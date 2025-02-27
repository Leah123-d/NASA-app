import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import apiRoutes from './routes/apiRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json()) //Middleware to parse JSON

const { authToken } = process.env;

// app.use('/',) will be connected to routes 

app.get('/api', (req,res) => { //creates an endpoint for the route/api
  res.json({ message: 'Hello from ExpressJS' })
})


fetch(`https://api.nasa.gov/planetary/apod?api_key=${authToken}`)
  .then(response => response.json()) //provided with a response object, once I get the response convert to JSON format
  .then(data => console.log(data.url)) // I might need to map this since there is an array of objects
  //this is where I can return specific details of the object by calling the key and returing the value
  .catch(error => console.error(error));



// getData()

// async function getData() {
//   try{
//     const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${authToken}&start_date=2017-07-08&end_date=2017-07-10`);
    
//     if(!response.ok){
//       throw new Error(`HTTP error: ${response.status}`)
//     }

//     const text = await response.text();
//     console.log("Raw Response:", text); 
//     const data = bodyParser.json(text); // If it's a valid JSON string
//     console.log(data.explination);
//   }
//   .catch(error){
//     console.error('Error:', error);
//   }
// }



// app.get('/data', (req,res) => { //a connection to the homepage
//   res.send("Hello Data")
// })


app.listen(port, () => {
  console.log(`Server is listening port ${port}`)

});