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





// fetch(`https://api.nasa.gov/planetary/apod?api_key=${authToken}`)
//   .then(response => {
//       if(!response.ok){ // if this response is not okay, throw a new error and it will be caught in the catch statement
//         throw new Error("Media not found");
//       }
//       return response.json(); //provided with a response object, once I get the response convert to JSON format

//   })
    
//   .then(data => console.log(data.url)) // I might need to map this since there is an array of objects
//   //this is where I can return specific details of the object by calling the key and returing the value
//   .catch(error => console.error(error)); //if we get a response that is not valid this error will be returned 

//can I place this in a get? 

// fetchData()

// //fetch will return an object at the URL specificed, the API token is entered as a variable configured in the .env file 
// //our data is assigned to the response returning it as .json
// //then we can console.log that data to check it

// async function fetchData() {
//   try{
//     const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${authToken}`) //get the URL and pass it to the fetch function as a string
//     //once the fetch resolves we have to check if the response is okay

//     if(!response.ok){
//       throw new Error("Media not found");
//     }

//     const data = await response.json();//the response is converted to json and this returns a promise 
//     console.log(data);

//   }
//   catch(error){
//     console.log(error);
//   }

// }




// app.get('/data', (req,res) => { //a connection to the homepage
//   res.send("Hello Data")
// })


app.listen(port, () => {
  console.log(`Server is listening port ${port}`)

});