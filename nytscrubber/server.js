const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Requiring Mongoose for MongoDB
const mongoose = require("mongoose");
const articlesController = require("./controllers/articlesControllers")
mongoose.Promise = global.Promise;
//Connecting to Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NYTReact");

//Configuring body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Serve up static assets
app.use(express.static("client/build"));
//Add routs both API and view
app.use(articlesController);

//Requiring scraping tools
const cheerio = require("cheerio");
const axios = require("axios");

//Require all models
const db = require("./models");

const PORT = process.env.PORT || 8000;



app.listen(PORT, function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
