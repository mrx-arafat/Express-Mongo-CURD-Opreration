const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//err handle

//error handling
app.get((req, res, next) => {
  res.status(404).json({ message: "page not found" });
});
//server error
app.get((err, req, res, next) => {
  res.status(500).json({ message: "Server crash" });
});

module.exports = app;
