const express = require('express');

//instance of the express app
const app = new express();

//defining port number
const port = 8080;

//route to handle requests to the root path "/"
app.get("/", (req, res) => {
    return res.send("Hello");
})

app.get("/sun/:num", (req, res) => {

    let num = req.params.num;
    if(num > 0 && num <= 11){
        
        res.send("The sun goes up at "+ num + "AM") ;
    } res.status(404).send("The number entered cause a failure");
})


//starting th server and listening on the specified port
app.listen(port, () => {
    console.log("Listening at http.//localhost:" + port);
} )


/*NOTIZE

npm start  -> the server runs

But it can be very frustrating to stop and start the server everytime you make changes. 
There is a package that comes handy in this case. The package is called nodemon. 
Every time you make changes in the server API, it will automatically restart the server. 
Let's install that in the same directory where we created our index.js. 
We will install and store it as a dev dependency with the –save-dev option because we want to use this only 
when we are running the server locally in our development environment.

npm install --save-dev nodemon

Once nodemon is installed, we will make changes to package.json to make use of this and re-start 
the script when there are changes. We will include the "start" : "nodemon index.js" in the scripts section of our package.json. 
With the changes, the package.json will look like this.


*/