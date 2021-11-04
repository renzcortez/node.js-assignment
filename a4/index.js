'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Thus route has an optional query param called id
app.get('/view',(req, res) => {
  let users = require('./get.json')
  if (Object.entries(req.query).length === 0) {
    //No query param passed with the request, fetch all the data from the get.json file
    res.json(users);
  } else {
    //id passed with the request query param, send the details of the user
    //having  id equal to the id that comes with the request query
    const result = users.filter(user => user.id === req.query.id);
    if (result.length !== 0) {
      res.json(result);
    }
    else {
      res.status(400).send('User does not exist!');
    }
  }
});

//This route should add the data sent with the request body into post.json file
app.post('/add', (req, res) => {
  const newUser = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email
  };
  //Verify data sent with the request body
  if (req.body.id && req.body.name && req.body.age && req.body.gender && req.body.email) {
    let newUsers = require('./post.json');
    newUsers.push(newUser);
    fs.writeFile('./post.json', JSON.stringify(newUsers, null, 2), (err) => {
      if (err) throw err;
      res.json(newUsers);
    });
  } else {
    res.status(400).send('Missing properties!');
  }
})

//This route should update the values of the user having id in post.json equal
//to the id that comes with the request URL
app.patch('/edit/:id', (req, res) => {
  let newUsers = require('./post.json');
  if (Object.entries(req.body).length === 0) {
    res.status(400).send('Missing properties!');
  } else {
    const result = newUsers.filter(user => user.id === req.params.id);
    if (result.length === 0) {
      res.status(400).send('User does not exist!');
    } else {
      //Update name, age, and email of a user
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
