// Marsupilami.route.js

const express = require('express');
const Marsupilami = require('../modele/Marsupilami');
const app = express();
const marsupilamiRoutes = express.Router();

// Require marsupilami model in our routes module
let marsupilami = require('../modele/Marsupilami');

// Defined add data
marsupilamiRoutes.route('/add').post(function (req, res) {
  let marsupilami = new Marsupilami(req.body);
  marsupilami.save()
    .then(marsupilami => {
      res.status(200).json({'marsupilami': 'marsupilami in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data
marsupilamiRoutes.route('/list').get(function (req, res) {
  console.log("hanaa")
    marsupilami.find( function (err, marsupilami){
    if(err){
      console.log(err);
    }
    else {
      console.log(marsupilami)
      res.json(marsupilami);
    }
  });
});
// Defined get data
marsupilamiRoutes.route('/list/:usernameMarsupilami').get(function (req, res) {
  const condition = {
    "friend" : req.params.usernameMarsupilami
  }
    marsupilami.find( condition,function (err, marsupilami){
    if(err){
      console.log(err);
    }
    else {
      res.json(marsupilami);
    }
  });
});


async function getByIdForUpdate(req,res) {

  const marsupilami = await Marsupilami.findById({ _id: req.params.id }).exec();
  console.log(marsupilami)
  marsupilami.id = req.body.id;
  marsupilami.age = req.body.age;
  marsupilami.family = req.body.family;
  marsupilami.race = req.body.race;
  marsupilami.food = req.body.food;
  marsupilami.friend = req.body.friend;
  marsupilami.save().then(marsupilami => {
    res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
}

//  Defined update route
marsupilamiRoutes.route('/edit/:id').post(function (req, res) {
  getByIdForUpdate(req,res);
});

async function getById(req,res) {

  const marsupilami = await Marsupilami.findById({ _id: req.params.id }).exec();
  return res.json(marsupilami);
}

//  Defined get route
 marsupilamiRoutes.route('/get/:id').get(function (req, res) { 
  getById(req,res);
});

async function getByIdAndChangeFreind(req,res) {

  const marsupilami = await Marsupilami.findById({ _id: req.params.id }).exec();
  marsupilami.friend = "";
  marsupilami.save().then(marsupilami => {
    res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
}
// Defined delete | remove 
marsupilamiRoutes.route('/delete/:id').get(function (req, res) {
    getByIdAndChangeFreind(req,res)
});
marsupilamiRoutes.route('/register/newMarsupilami').post(function (req, res) {
  let marsupilami = new Marsupilami(req.body);
  marsupilami.save()
    .then(marsupilami => {
      res.json(marsupilami._id)
     // res.status(200).json({'marsupilami': 'marsupilami in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
  
});
 //inscription
 marsupilamiRoutes.route('/register').post(function (req, res) {
  let marsupilami = new Marsupilami(req.body);
  marsupilami.save()
    .then(marsupilami => {
      res.json(marsupilami._id)
     // res.status(200).json({'marsupilami': 'marsupilami in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
  
});

// login
async function authenticateService({ username, password }) {
  const marsupilami = await Marsupilami.findOne({ username });
  console.log(marsupilami.username)
  if (marsupilami && marsupilami.password == password ) { 
      return {
          ...marsupilami.toJSON(),
         
      };
  }
}

marsupilamiRoutes.route('/login').post(function(req, res, next) {
  authenticateService(req.body)
      .then(marsupilami => marsupilami ? res.json(marsupilami) : res.status(400).json({ message: 'Username or password is incorrect' }))
      .catch(err => next(err));
})

module.exports = marsupilamiRoutes;