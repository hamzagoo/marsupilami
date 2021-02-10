const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Marsupilami
let Marsupilami = new Schema({
  username:{
    type: String
  },
  password:{
    type: String
  },
  age: {
    type: Number
  },
  family: {
    type: String
  },
  race: {
    type: String
  },
  food: {
    type: String
  },
  friend: {
    type: String
  },
},{
    collection: 'marsupilami'
});

module.exports = mongoose.model('marsupilami', Marsupilami);