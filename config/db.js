const mongoose = require("mongoose");
// const config = require("./config");

require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/userDemoDB",
  },
};

const dbURL = dev.db.url;

mongoose.set("strictQuery", false);

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongodb atlas connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

module.exports = dev;
