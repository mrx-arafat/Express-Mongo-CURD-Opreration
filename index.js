const app = require("./app");
const db = require("./config/db");
//get req

//server port and listen
const PORT = db.app.port;
const server = "127.0.0.69";

app.listen(PORT, server, () => {
  console.log(`server listening at http://${server}:${PORT}`);
});
