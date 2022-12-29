const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//get req
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

//error handling
app.get("*", function (req, res) {
  res.status(404).json({ message: "hey koi tomar page!!! 404" });
});
//server error
app.get((err, req, res, next) => {
  res.status(500).json({ message: "Server crash" });
});

module.exports = app;
