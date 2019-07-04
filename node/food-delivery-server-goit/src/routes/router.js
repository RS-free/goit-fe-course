const pizzaRoute = require("./pizza/pizza");
const signUpRoute = require("./users/sign-up-route");

router
  .get("/food-delivery-server-goit/src/routes/pizza", pizzaRoute)
  .post("/food-delivery-server-goit/src/routes/users", signUpRoute);

// Взять данные что пришли

module.exports = router;

// const router = (req, res) => ({
//   "/signup": signUpRoute,
//   "/pizza": pizzaRoute,
//   default: mainRoute
// });

// console.log(req.url)
//   switch (req, url){
//     case: '/signup': router(req, res);
//     break;
//     default:
//       res.end('No such route');
//       send404Page(req, res);
//   }
// };
