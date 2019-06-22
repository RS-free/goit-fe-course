const mainRoute = require("./main/main");
// const pizzaRoute = require("./pizza/pizza");
const signUpRoute = "./users/sign-up-route";

// const router = {
//   "/signup": signUpRoute,
//   "/pizza": pizzaRoute,
//   default: mainRoute
// };
const signUpRoute = (req, res) => {
  // Взять данные что пришли
  
  console.log(req.url)
  switch (req, url){
    case: '/signup': signUpRoute(req, res);
    break;
    default:
      res.end('No such route');
      send404Page(req, res);
  }
};

module.exports = router;
