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
  res.send("heello home");
});

//server port and listen
const PORT = 3000;
const server = "127.0.0.69";

app.listen(PORT, server, () => {
  console.log(`server listening at http://${server}:${PORT}`);
});
