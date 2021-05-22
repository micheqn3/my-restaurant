[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## My Restaurant

This application contains a restaurant reservation app and is hosted on the local server using Express.
The form data is posted to the /api route and the first 5 reservations will be send to the tables list. All of the
reservations after the first 5 will be sent to the waitlist.


### Installation 

1. Make sure you have Node.js to run the application
2. Clone this repo
> HTTPS: `https://github.com/micheqn3/my-restaurant.git` <br>
> SSH: `git@github.com:micheqn3/my-restaurant.git`
3. Install the NPM packages
> npm install
4. Run the application in the command line 
> node server.js
5. Open the application in your browser as it is hosted locally
> http://localhost:3000

### This repository contains: 

  - server.js - This file utilizes Express to create a server and initializes the routes to each page.
  - /pages - These files contain the layout of the HTML pages for the home page, reservation page, and tables page.


### Technologies/Languages used: 

  - JavaScript
  - Node.js 
  - Express
  - Nodemon

### Screenshot of pages

Home Page            |  Reservations   
:-------------------------:|:-------------------------: 
![Home page](/Assets/screenshot-1.png)  |  ![Reservations](/Assets/screenshot-2.png). 

Current Tables
:-------------------------:
![Tables](/Assets/screenshot-3.png)


### License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT 
