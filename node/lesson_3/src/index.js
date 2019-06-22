const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/router");

const app = express();
const globalMiddleWare = (req, res) => {
  console.log("middleware 1");
  next();
};

app
    .use(express.static('static'))
    .use(bodyParser.json());
    .use(globalMiddleWare);
    .use(router);
    .use((err, req, res, next) => {
        console.log('error:', arr);
        Response.end(err)
    });

app.get('/signup', (req, res) => {
    res.send('Hello World!');
});

app.post('/signup',(req, res, next) {console.log('middleware 1')} => (req, res) => {
    res.send('Post signup');
    console.log();
});

// app.get('/signup',(req. res) => {
//     res.send('')
// })
app.listen(8080, function() {
  console.log("Test");
});
