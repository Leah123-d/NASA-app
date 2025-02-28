import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json()) //Middleware to parse JSON

const { authToken } = process.env;

app.get('/', (req,res) => {
  res.send("Hello! Welcome to the server!")
})

// app.get('/api', (req,res) => { //creates an endpoint for the route/api
//   res.json({ message: 'Hello from ExpressJS' })
// })

app.get('/api', async (req,res) => { //creates an endpoint for the route/api
  console.log('API request received for NASA Data');

  const data = await NASAData(); //await the data before sending 
  res.json(data);
});

app.get('/api/archives', async (req,res) => { //creates an endpoint for the route/api
  console.log('API request received for NASA Data');

  const data = await archives(); //await the data before sending 
  res.json(data);
});

//create an archives function with a fetch to nasa apod with date parameter


//fetch will return an object at the URL specificed, the API token is entered as a variable configured in the .env file 
//our data is assigned to the response returning it as .json
//then we can console.log that data to check it

const NASAData = async () =>  {
  try{
    console.log("Fetching NASA data...");
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${authToken}`) //get the URL and pass it to the fetch function as a string
    //once the fetch resolves we have to check if the response is okay

    if(!response.ok){
      throw new Error("Media not found");
    }
    const data = await response.json();//the response is converted to json and this returns a promise 
    console.log("NASA data", data);
    return data; // Return the fetched data

  }
  catch(error){
    console.error("Error fetching data: ", error);
    return { error: error.message}
  }
}

//this is the fetch for the route for day of photo only 




app.listen(port, () => {
  console.log(`Server is listening port ${port}`)

});