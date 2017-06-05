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
      type: String,
      ref:'User',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamp:true
  }
);

buzzSchema.index({content:'text'});

buzzSchema.pre('save', function(next) { //hooks
  console.log('saving..',this.content.length);
  if(this.content.length<=100)
  next();
  else{
    let err = new Error('Content Validation Failed');
    next(err)
  }
});

module.exports = mongoose.model('Buzz', buzzSchema);

