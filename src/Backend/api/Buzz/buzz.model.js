const mongoose = require('mongoose');
const categoryType = ['lostnfound', 'activity'];

const buzzSchema = new mongoose.Schema({
    content: {
      type: String
    },
    img: {},
    postCreated: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      default: 'activity',
      enum: categoryType,

    },
    userDetails: {
      type: Object,
      required: true,
    },


  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Buzz', buzzSchema);

