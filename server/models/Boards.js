const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  author: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  createdOn: {
    type: Date,
  },
});

module.exports = Board = mongoose.model('board', BoardSchema);
