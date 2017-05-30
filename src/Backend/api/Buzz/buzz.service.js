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

exports.getBuzz=(offset,res)=>{
  return new Promise((resolve,reject)=>{
    Buzz.find({})
      .sort({'postCreated':-1})
      .limit(10)
      .skip(offset)
      .exec((err,data) => {
      if(err){
        reject({error:err})
      }else{
        resolve(data)
      }
    })
  })
};

exports.deleteBuzz =  (buzzDetails,res) => {
  const buzzId = buzzDetails.post._id;
return new Promise((resolve,reject)=>{
  Buzz.find({'userDetails.id':buzzDetails.currentId},(err,data) => {
    if(err) reject({error:err});
    else {
      Buzz.remove({'_id':buzzId},(err,data) =>{
        if(err) reject({error:err});
        else{
          Buzz.find({},null,{sort:{'postCreated':-1}},(err,data)=>{
            if(err) reject({error:err});
            else {
              resolve(data)
            }
          })
        }
      })
    }
  });
})
};

exports.getlostnfoundBuzz = (res)=>{
  Buzz.find({'category':'lostnfound'},null,{sort:{'postCreated':-1}},(err,data) =>{
    if(err){
      res.send({error:err})
    }else{
      res.send(data)
    }
  })
};