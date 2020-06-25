const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
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
      console.log('Selection error');
    } else {
      console.log('Successfully retrieved');
      if (
        // checking if email alreary exists in database
        result.findIndex(
          (element, index, array) => element.email == req.body.email
        ) == -1
      ) {
        //sending an email

        let mailTransporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'alexpishnik@gmail.com',
            pass: '2000-2000',
          },
        });

        let mailDetails = {
          from: "U'R Diary developer <alexpishnik@gmail.com>",
          to: req.body.email,
          subject: "U'R Diary account registration",
          html: `<div style="font-family: Cambria, Rockwell;font-size: 32px;"> <h1 style="color: #000000">Dear, ${req.body.email}</h1> <p style="color: #000000">Thanks for joining <span style="font-family: Kaushan Script; font-size: 44px; color: #FF9900;">U'R Diary!</span></p><p style="color: #000000"><span style="font-family: Kaushan Script; font-size: 44px; color: #FF9900;">U'R Diary</span> is the best place to write down your thoughts, memories, daily routine and big events</p> 
            <p style="color: #000000">We are happy you chose us among other and promise your data will be secured.Believe in yourself and make it happen</p>
            <p><span style="color: #0280ff; font-weight: bold;">Write and share. </span><span style="color: #f20056";font-weight: bold;>Or just write</span></p>
            <p style="color: #000000">Best wishes, <br><span style="font-family: Kaushan Script; color: #8000ff";>U'R Diary developer, Alexander -2kZharkov</span></p>
            </div>`,
        };

        mailTransporter.sendMail(mailDetails, function (err, data) {
          if (err) {
            console.log(`Error occurs ${err}`);
          } else {
            console.log(`Email sent successfully ${data.response}`);
          }
        });

        // add new account to DB
        let user = {
          email: req.body.email,
          nickname: req.body.nickname,
          password: req.body.password,
          image: req.body.image,
          about_self: req.body.something,
        };
        let insertion = 'INSERT INTO User SET ?';
        connection.query(insertion, user, (err, result) => {
          if (err) {
            console.log('Insertion error');
          } else {
            console.log('Successfully added');
            console.log(`New inserted record ${result.insertId}`);
            res.status(200).send(result);
          }
        });
      } else {
        // send negative response
        res.status(208).send('Email has already taken');
        return;
      }
    }
  });
});

// checking login data

app.post('/login', (req, res) => {
  // DON'T FORGET TO set right url at react
  connection.query('SELECT * FROM USER', (err, result) => {
    if (err) {
      console.log('Selection error');
    } else {
      console.log('Successfully retrieved');
      let match = result.find(
        (item, index, array) =>
          item.email == req.body.email && item.password == req.body.password
      );
      if (match) {
        console.log('Welcome to your personal room ' + match);
        res.status(200).send(match);
      } else {
        console.log('No match, try again');
        res.status(203).send('No match, try again');
      }
    }
  });
});

// find user data and relevant to him records

app.get('/personalRoom/:id', (req, res) => {
  console.log(req.params);
  connection.query(
    `Select User.* , Note.* from Note INNER JOIN User On Note.user_id=User.id where User.id=${req.params.id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
      res.send(result);
    }
  );
});

// get user nickname
app.get('/personalRoom/:id/new-record', (req, res) => {
  connection.query(
    `Select nickname from User Where User.id=${req.params.id}`,
    (err, result) => {
      console.log(`NEw record ${result}`);
      res.send(result);
    }
  );
});

// adding new record
app.post('/personalRoom/:id/new-record', (req, res) => {
  let record = {
    content: req.body.content,
    image: req.body.image,
    date: new Date(),
    user_id: req.params.id,
  };
  console.log(`DATE ${new Date().toLocaleDateString()}`);
  let insertion = 'INSERT INTO Note SET ?';
  connection.query(insertion, record, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`NEw record`);
      console.log(result);
    }
    res.send(result);
  });
});

// get user nickname and id within editing component
app.get('/personalRoom/:id/edit-record/:rec_id', (req, res) => {
  console.log(req.params);
  connection.query(
    `Select User.id, User.nickname, Note.content, Note.image from Note INNER JOIN User ON Note.user_id=User.id Where User.id=${req.params.id} and Note.id=${req.params.rec_id}`,
    (err, result) => {
      console.log(result);
      res.send(result);
    }
  );
});

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
