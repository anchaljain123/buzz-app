const Complain = require('./complaint.model');

exports.saveComplain = function (complainDetails,res) {

    Complain.create(complainDetails,(err,data) =>{
        if(err) {
          res.send({msg:err});
        }
        else
        {
            res.send(data);
        }
    })
};


exports.getComplain = function (res) {

    Complain.find({},(err,data) =>{
        if(err){
          res.send({msg:err});
        }
        else {
            res.send(data);
        }
    })
};

exports.deleteComplain = function (complainID,res) {
  console.log('___service',complainID.id);

  Complain.remove({'_id':complainID.id},(err,data)=>{
    if(err){
      res.send({msg:err});
    }
    else{
      res.send(data)
    }
  })
};