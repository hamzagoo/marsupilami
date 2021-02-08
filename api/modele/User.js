const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Marsupilami
let User = new Schema({
  id: {
    type: Number
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
},{
    collection: 'user'
});

module.exports = mongoose.model('user', User);