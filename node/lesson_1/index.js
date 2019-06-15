const http = require("http");
const morgan = require("morgan");

const logger = morgan(format: 'combined');

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url.includes(searchString: 'user')){
      response.end("<h1>Hello World!</h1>");
      return;
  }
  if (request.url.includes(searchString: 'product')) {
    response.end("<h1>Product</h1>");
      return;
  }
  response.end('<h1>Hello World!</h1>')
});
server.listen(8081);
