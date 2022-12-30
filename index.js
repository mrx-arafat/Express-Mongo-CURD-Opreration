const app = require("./app");
const config = require("./config/config");
//get req

//server port and listen
const PORT = config.app.port;
const server = "127.0.0.69";

app.listen(PORT, server, () => {
  console.log(`server listening at http://${server}:${PORT}`);
});
