// User.route.js

const express = require('express');
const app = express();
const userRoutes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Require marsupilami model in our routes module
const User = require('../modele/User');

// Defined store route
userRoutes.route('/register').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'user': 'user in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

async function authenticateService({ username, password }) {
  const user = await User.findOne({ username });
  if (user) { //&& bcrypt.compare(password, user.hash,null)
      const token = jwt.sign({ sub: user.id },  "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING", { expiresIn: '7d' });
      return {
          ...user.toJSON(),
          token
      };
  }
}

userRoutes.route('/login').post(function(req, res, next) {
  authenticateService(req.body)
      .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
      .catch(err => next(err));
})

// Defined get data(index or listing) route
/*userRoutes.route('/login').post(function (req, res) {
  debug
    user.findOne(function (err, user){
    if(err){
      console.log(req);
      console.log("hana");
    }
    else {
      res.json(user);
    }
  });
});*/

module.exports = userRoutes;