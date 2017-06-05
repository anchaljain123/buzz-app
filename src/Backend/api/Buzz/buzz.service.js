const Buzz = require('./buzz.model');

exports.saveBuzz = function (buzzDetails, res) {
  const newBuzz = new Buzz(buzzDetails);
  newBuzz.save(buzzDetails, (err, data) => {
    if (err){
      res.send({error: err});
    }
    else {
      res.send(data);
    }
  })
};

exports.getBuzz = (offset, res) => {
  return new Promise((resolve, reject) => {
    Buzz.find({})
      .populate('userDetails',{userName:1, 'profile.image.url':1})
      .sort({'postCreated': -1})
      .limit(10)
      .skip(offset)
      .exec((err, data) => {
        if (err) {
          reject({error: err})
        } else {
          resolve(data)
        }
      })
  })
};

exports.deleteBuzz = (buzzDetails, res) => {
  const buzzId = buzzDetails.post._id;
  return new Promise((resolve, reject) => {
    Buzz.find({'userDetails._id': buzzDetails.currentId}, (err, data) => {
      if (err) reject({error: err});
      else {
        Buzz.remove({'_id': buzzId}, (err, data) => {
          if (err) reject({error: err});
          else {
          this.getBuzz(0,res)
          }
        })
      }
    });
  })
};

exports.getlostnfoundBuzz = (res) => {
  Buzz.find({'category': 'lostnfound'})
    .populate('userDetails',{userName:1, 'profile.image.url':1})
    .sort({'postCreated': -1})
    .exec((err, data) => {
    if (err) {
      res.send({error: err})
    } else {
      res.send(data)
    }
  })
};