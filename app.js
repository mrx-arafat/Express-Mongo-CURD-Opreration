const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.route");
const app = express();
require("./config/db");
//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);
//api/users: GET

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

///api/users/:id :GET
//api/users/ : POST

//api/users/ : id : PATCH

//api/users/:id : DELETE

//error handling
app.get((req, res, next) => {
  res.status(404).json({ message: "page not found" });
});

//server error
// app.get((err, req, res, next) => {
//   res.status(500).json({ message: "Server crash" });
// });

app.use((error, req, res, next) => {
  console.log("Error Handling Middleware called");
  console.log("Path: ", req.path);
  console.error("Error: ", error);

  if (error.type == "redirect") res.redirect("/error");
  else if (error.type == "time-out")
    // arbitrary condition check
    res.status(408).send(error);
  else res.status(500).send(error);
});

module.exports = app;
