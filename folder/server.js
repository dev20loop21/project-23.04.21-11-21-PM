// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

//Require body-parser
const bodyParser=require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors=require("cors");
app.use(Cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
let port=8080;
function listening (req, res) {
    console.log("Server Is Runing on a local host = "+port);
}
const server=app.listen(port, listening);

//Create Post method
//create the callback
function sendData (req, res){
    projectData["date"] = req.body.date;
    projectData["temp"] = req.body.temp;
    projectData["content"] = req.body.content;
    res.send(projectData);
}
//post method
app.post("/path1", sendData);

//Create Get method
//the callback
function recieveData(req,res) {
    res.send(projectData)}
//get method    
app.get("/path2",recieveData);