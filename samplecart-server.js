const http = require("http");
const app = require("./app");
const port = process.env.PORT;
const server = http.createServer(app);
server.listen(port, function() {
  console.log(`server is listening on port ${port} for requests`);
});