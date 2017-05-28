const mongoose = require('mongoose');
const categoryType = ['lostnfound', 'activity'];

const buzzSchema = new mongoose.Schema({
    content: String,
    img: {},
    postCreated: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      default: 'activity',
      enum: categoryType,
      index:true,

    },
    userDetails: {
      type: Object,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamp:true
  }
);

buzzSchema.index({content:'text'});

buzzSchema.pre('find', function() { //hooks
  console.log('finding..')
});
module.exports = mongoose.model('Buzz', buzzSchema);

