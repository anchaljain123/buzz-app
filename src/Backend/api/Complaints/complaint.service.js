const Complain = require('./complaint.model');

exports.saveComplain = function (complainDetails, res) {

    Complain.create(complainDetails, (err, data) => {
        if (err) {
            res.send({msg: err});
        }
        else {
            res.send(data);
        }
    })
};

exports.getComplain = function (res) {

    Complain.find({},{'complainCreated':0,'complainUpdated':0}, (err, data) => {
        if (err) {
            res.send({msg: err});
        }
        else {
          res.send(data);
        }
    })
};

exports.deleteComplain = function (complainID, res) {

    Complain.findByIdAndRemove({'_id': complainID.id}, (err, data) => {
        if (err) {
            res.send({msg: err});
        }
        else {
            res.send(data)
        }
    })
};

exports.resolveComplain = (complainID, res) => {
    Complain.update({'_id': complainID.id}, {$set: {'status': 'Resolved'}}, (err, data) => {
        if (err) {
            res.send({msg: err});
        }
        else {
          this.getComplain(res)
        }
    })
};

exports.inprocessComplain = (complainID, res) => {
  Complain.find({'_id': complainID.id},(err,data)=> {
    if (err) res.send({err: err});
    else {
      let findData = data;
      Complain.update({'_id': complainID.id}, {$set: {'status': 'Inprocess'}}, (err, data) => {
        if (err) {
          res.send({msg: err});
        }
        else {
          findData[0].status = 'Inprocess'
          res.send(findData[0]);
        }
      })
    }
  })
};
