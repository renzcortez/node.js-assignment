'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/view',(req, res) => {
  let users = require('./get.json')
  if (Object.entries(req.query).length === 0) {
    //get all users
    res.json(users);
  } else {
    //get user by id
    const result = users.filter(user => user.id === req.query.id);
    if (result.length !== 0) {
      res.json(result);
    }
    else {
      res.sendStatus(400);
    }
  }
});

app.post('/add', (req, res) => {
  const newUser = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email
  };
  if (req.body.id && req.body.name && req.body.age && req.body.gender && req.body.email) {
    let newUsers = require('./post.json');
    newUsers.push(newUser);
    fs.writeFile('./post.json', JSON.stringify(newUsers, null, 2), (err) => {
      if (err) throw err;
      res.json(newUsers);
    });
  } else {
    res.sendStatus(400);
  }
})

app.patch('/edit/:id', (req, res) => {
  let newUsers = require('./post.json');
  if (Object.entries(req.body).length === 0) {
    res.sendStatus(400);
  } else {
    const result = newUsers.filter(user => user.id === req.params.id);
    if (result.length === 0) {
      res.sendStatus(400);
    } else {
      newUsers.forEach(user => {
        if (user.id === req.params.id) {
          if (req.body.id) {
            user.id = req.body.id
          }
          if (req.body.name) {
            user.name = req.body.name
          }
          if (req.body.age) {
            user.age = req.body.age
          }
          if (req.body.gender) {
            user.gender = req.body.gender
          }
          if (req.body.id) {
            user.email = req.body.email
          }
        }
      });
      fs.writeFile('./post.json', JSON.stringify(newUsers, null, 2), (err) => {
        if (err) throw err;
        res.json(newUsers);
      })
    }
  }
})

app.listen(3000, function () {
  console.log('Server started on port 3000');
})
