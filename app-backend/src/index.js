import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import apiRoutes from './routes/apiRoutes.js';

dotenv.config();

app.use(bodyParser.json()) //Middleware to parse JSON

const app = express();
const port = 3000;

// app.use('/',) will be connected to routes 

app.get('/', (req,res) => { //a connection to the homepage
  res.send("Hello World")
})

app.listen(port, () => {
  console.log(`Server is listening port ${port}`)

});