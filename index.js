const { dirname } = require("path");
const app = require("./app");

//server port and listen
const PORT = 3000;
const server = "127.0.0.69";

app.listen(PORT, server, () => {
  console.log(`server listening at http://${server}:${PORT}`);
});
