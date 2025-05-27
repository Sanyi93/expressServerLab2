 /*to run the app:
 npm install --save express
 node expressServer.js

 --split the terminal--

 curl localhost:3333

 trying endpoints
curl -X POST http://localhost:3333/login/Jason
curl http://localhost:3333/Jason
curl http://localhost:3333/loginDetails

Stopping the server by: "strg+ c"

 */

 // Import the Express.js library
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Initialize an array to store login details
let loginDetails = [];

// Define the root route to send a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string
app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details
app.post("/login/:name", (req, res) => {
    loginDetails.push({ "name": req.params.name, "login_time": new Date() });
    res.send(req.params.name + ", You are logged in!");
});

// Define a dynamic route to greet users by name
app.get("/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

//defining an endpoint to fetch a particular month based on a number send in a request
//array of months
//run: curl http://localhost:3333/fetchMonth/7
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

app.get("/fetchMonth/:num", (req, res) => {
    //parsing number from the request
    let num = parseInt(req.params.num);

    if(num < 1 || num > 12){
        //in case of invalid number
        res.send("You have entered an invalid number");
    } else {
        //months[num-1] since array starts at 0
        res.send("The month you requested is " + months[num-1]);
    }
});

// Start the server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
