var express = require("express");

//Requiring Mongoose for MongoDB
var mongoose = require("mongoose");

//Requiring scraping tools
var cheerio = require("cheerio");
var axios = require("axios");

//Require all models
var db = require("./models");

var PORT = 8000

const app = express();