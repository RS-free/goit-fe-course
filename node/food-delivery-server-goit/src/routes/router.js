const mainRoute = require("./main/main");
const pizzaRoute = require("./pizza/pizza");
const signUpRoute = "./users/sign-up-route";

const router = {
  "/signup": signUpRoute,
  "/pizza": pizzaRoute,
  default: mainRoute
};

module.exports = router;
