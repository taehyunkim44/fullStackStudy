const mongoose = require('mongoose');

const repleSchema = new mongoose.Schema(
  {
    reple: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    postID: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { collection: 'reples' }
);

const Reple = mongoose.model('Reple', repleSchema);

module.exports = { Reple };
