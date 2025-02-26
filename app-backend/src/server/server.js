const pgtools = require('pgtools');
require('dotenv').config();


const config =  {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD
    } = process.env



const Client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
});

Client.connect()
    .then(() => console.log("connected to the database"))
    .catch(err => console.error("connection error", err));


module.exports = Client;