const Buzz = require('./buzz.model');

exports.saveBuzz = function (buzzDetails,res) {
  Buzz.create(buzzDetails,(err,data) =>{
    if(err) res.send({error:err});
    else
    {
      res.send(data);
    }
  })
};

exports.getBuzz=(res)=>{
  return new Promise((resolve,reject)=>{
    Buzz.find({},null,{sort:{'postCreated':-1}},(err,data) =>{
      if(err){
        reject({error:err})
      }else{
        resolve(data)
      }
    })
  })
};

exports.deleteBuzz = function (buzzDetails,res) {
  const buzzId = buzzDetails.post._id;

  Buzz.find({'userDetails.id':buzzDetails.currentId},(err,data) => {
    if(err) res.send({error:err});
    else {
      Buzz.remove({'_id':buzzId},(err,data) =>{
        if(err) res.send({error:err});
        else{
          res.send(data);
        }
      })
    }
  });
};

exports.updateBuzz = function (buzzDetails,res) {

  Buzz.find({'_id':buzzDetails.buzzid},(err,data)=>{
    if(err) res.send({error:err});
    else
    {
      Buzz.update({'_id':buzzDetails.buzzid},
        { $set:{likescount:buzzDetails.like}},(err,data)=>{
        if(err) res.send({error:err});
        else
        {
          Buzz.find({},(err,data) => {
            if(err) res.send({error:err});
            else
            {
              res.send(data)
            }
          })
        }
      })
    }
  })
};