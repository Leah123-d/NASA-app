# Welcome to NASA-app! 

I created a wrapper around the NASA API to return requests to a front-end. 

## Project Objective:

This is my first full stack application build. 

This project highlights the skills of React, useState hooks and Express.js.

This project utilizes a backend server, created with Express.js and it is making calls to an API, displaying the data to the frontend.

## Technologies used

NASA [Astronomy Picture of the Day](https://github.com/nasa/apod-api)
React 
Express.js
Node.js
VSCode 

### Additional Resources
A [website](https://apod.nasa.gov/apod/ap250216.html) displaying Astronomy Picture of the Day data

A [tutorial](https://liderrick.github.io/apodHowTo/index.html) for working with Astronomy Picture of the Day

## Installation Instructions

1. Create a folder on your computer
2. Clone this repository to the folder in step 1. 
3. Open the cloned repository in a code editor 


### Environment setup: 

At the root level of your project run the following installation commands 

`````````
npm install
`````````
`````````
npm install dotenv
`````````
`````````
npm install express
`````````


### api key setup:

1. Click this [link](https://api.nasa.gov/) to sign up for and sign up to generate a key
2. Check your email for the api key
3. In your code editor create a file named .env
4. In .env enter the belwo replace the ENTERAPIKEYHERE with the API generated from NASA:

`````````
authToken = DEMO_KEY
`````````

### How to run:
For Backend
1. cd into the folder server  
2. In the terminal type ````````` node index.js`````````

To confirm the backend is connection navigate to the URL `````````localhost:3000/api`````````

For Frontend
1. cd into the folder app-front-end
2. In the terminal type ````````` npm run dev `````````


## Future Implementation: 

Here are ideas that I would like to add to this project in the future: 
1. Additional search options, there is an API that can take parameters of a start and end date to return a range of media
2. Video media_types are not displaying correctly. The link is available, however, it is not rendering
3. Implement media queries to make this page responsive and adjust to a variety of screen sizes
4. Add a current day button, this way users can view the current day photo instead of entering the day


## Project Preview: 

Once the environment is set up a photo of the current day's Astronomy Picture of the Day should appear. 

![wk7projectoverview](https://github.com/user-attachments/assets/670cb668-6878-4776-aa80-c3c13d2e092c)

