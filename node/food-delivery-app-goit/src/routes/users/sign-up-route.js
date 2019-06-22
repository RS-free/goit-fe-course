const fs = require('fs');

const getBody = () => new Promise(executor:(resolve) => {
  let data = '';
  request.on(event: 'data', handler:(dataChank) => {
    data = data + dataChank;
  });
  request.on(event: 'end', handler:() => {
    resolve(data);
  });
});

const signUpRoute = (req, res) => {
  const body = await getBody(req);
  const user = JSON.parse(body);

  // console.log(JSON.parse(body));
  const filePath = path.join(__dirname, '../..', 'db', 'users', user.username.toLowerCase() + '.json');
  fs.writeFile(filePath, body);
  ews.setHeader('Content-Type', 'Application/json');
  res.end(JSON.stringify( value: {
      "status": "success", 
      "user": {
         "username": "Ivan",
         "telephone": "063 777 77 77",
         "password": "12345",
         "email": "ivan@gmail.com"
       }
      }));
};

module.exports = signUpRoute;
