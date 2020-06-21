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

app.get('/', (req, res) => {
  res.send('Hello');
});
app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
