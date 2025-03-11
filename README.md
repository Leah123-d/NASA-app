# Welcome to NASA-app! 

I designed a wrapper around the NASA API to return requests to a front-end. 

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
Tailwind CSS

### Additional Resources
A [website](https://apod.nasa.gov/apod/ap250216.html) displaying Astronomy Picture of the Day data

A [tutorial](https://liderrick.github.io/apodHowTo/index.html) for working with Astronomy Picture of the Day

## Installation Instructions

1. Clone this repository to the folder
2. Open the cloned repository in a code editor 


### Environment setup: 

Change directories to the server folder and run: 

`````````
npm install
`````````


### api key setup:

The project is set up with a demo key. To run the application edit the .envexample to .env. 

If you would like to sign-up for an API key register [here](https://api.nasa.gov/).

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

1. Additional search options, adding an end date input will allow the users to select a range of media. 
2. Video media_types are not displaying correctly. The link is available, however, it is not rendering with a preview. 
3. Implement media queries to make this page responsive and adjust to a variety of screen sizes.
4. Add a current day button, this way users can view the current day photo instead of entering the day.
5. Add testing for front end components. 
6. Add error handling for the UI where the user can recieve a message why an image did not load or return any results. 


## Project Preview: 

Once the environment is set up a photo of the current day's Astronomy Picture of the Day should appear. 

![wk7projectoverview](https://github.com/user-attachments/assets/670cb668-6878-4776-aa80-c3c13d2e092c)

