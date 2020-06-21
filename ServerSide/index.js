const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const serverPort = 4000;

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123456789',
  database: 'diary_app',
  insecureAuth: true,
});

app.use(cors('*'));
app.use(bodyParser.json());

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.post('/registration', (req, res) => {
  console.log(req.body);
  connection.query('SELECT * FROM USER', (err, result) => {
    if (err) {
      console.log('Insertion error');
    } else {
      console.log('Successfully retrieved');
      console.log(result);
      if (
        // checking if email alreary exists in database
        result.findIndex(
          (element, index, array) => element.email == req.body.email
        ) == -1
      ) {
        let user = {
          email: req.body.email,
          nickname: req.body.nickname,
          password: req.body.password,
          image: req.body.image,
          about_self: req.body.something,
        };
        let insertion = 'INSERT INTO User SET ?';
        connection.query(insertion, user, (err, result) => { // add new account to DB
          if (err) {
            console.log('Insertion error');
          } else {
            console.log('Successfully added');
            console.log(result);
          }
        });
        res.status(200).send('Successfully registrated');
      } else {
        res.status(208).send('Email has already taken');
      }
    }
  });
});

/* app.post('/registration', (req, res) => {
  
});
*/
app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
