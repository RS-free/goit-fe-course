const http = require("http");
const { port } = require("../../config.js");
const signUpRoute = require("../routes/users/sign-up-route");
// const url = require("url");

// const morgan = require("morgan");
// const router = require("../routes/router");

// const logger = morgan("combined");

const startServer = port => {
  const server = http.createServer((req, res) => {
    // console.log(`Method: ${req.method} url: ${req.url}`);
    res.statusCode = 200;
    res.end(`Method: ${req.method} url: ${req.url}`);
    signUpRoute;
    // const parseUrl = url.parse(request.url);
    // const func = router[parseUrl.pathname] || router.default;
    // logger(request, response, () => func(request, response));
  });
  server.listen(port);
  console.log("Server qas start on port 8080");
};
module.exports = startServer;
