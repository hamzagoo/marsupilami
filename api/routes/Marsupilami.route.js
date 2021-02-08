// Marsupilami.route.js

const express = require('express');
const Marsupilami = require('../modele/Marsupilami');
const app = express();
const marsupilamiRoutes = express.Router();

// Require marsupilami model in our routes module
let marsupilami = require('../modele/Marsupilami');

// Defined store route
marsupilamiRoutes.route('/add').post(function (req, res) {
  let marsupilami = new Marsupilami(req.body);
  console.log(marsupilami + "*****")
  marsupilami.save()
    .then(marsupilami => {
      res.status(200).json({'marsupilami': 'marsupilami in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data( listing) route
marsupilamiRoutes.route('/list').get(function (req, res) {
    marsupilami.find(function (err, marsupilami){
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
  marsupilami.createdBy = req.body.createdBy;
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

// Defined delete | remove 
marsupilamiRoutes.route('/delete/:id').get(function (req, res) {
    Marsupilami.findByIdAndRemove({_id: req.params.id}, function(err, marsupilami){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = marsupilamiRoutes;