import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import apiRoutes from './routes/apiRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json()) //Middleware to parse JSON

const {authToken} = process.env;

// app.use('/',) will be connected to routes 

app.get('/api', (req,res) => { //creates an endpoint for the route/api
  res.send("Hello API World")
})

// async function getData() {
//   try{
//     const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10`);
    
//     if(!response.ok){
//       throw new Error(`HTTP error: ${response.status}`)
//     }

//     const text = await response.text();
//     console.log("Raw Response:", text); 
//     const data = JSON.parse(text); // If it's a valid JSON string
//     console.log(data.explination);
//   }
//   catch (error){
//     console.error('Error:', error);
//   }
// }

// getData()

// app.get('/data', (req,res) => { //a connection to the homepage
//   res.send("Hello Data")
// })


app.listen(port, () => {
  console.log(`Server is listening port ${port}`)

});