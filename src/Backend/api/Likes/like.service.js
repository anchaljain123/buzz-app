const Like = require('./like.model');

exports.saveLike = function (buzzDetails,res) {
  Like.update({'postId':buzzDetails.buzzid,'userDetails.userid':buzzDetails.uid},
    {$set:{like:buzzDetails.like}},{ upsert: true},(err,data)=>{
    if(err) res.send({msg:err});
    else
    {
      res.send(data);
    }
  })
};

exports.getLikes = function (res) {

  Like.find({like:true},(err,data)=>{
    if(err) res.send({msg:err});
    else
    {
      res.send(data);
    }
  })
};

exports.getDislikes = function (res) {

  Like.find({'like':false},(err,data)=>{
    if(err) res.send({msg:err});
    else
    {
      res.send(data);
    }
  })
};

exports.deletelikes = (postData,res) => {
  Like.remove({'postId':postData.post._id},(err,data)=>{
    if(err){
      res.send({msg:'Error while deleting',error:err});
    }
    else {
      Like.find((err,data)=>{
        if(err){
          res.send({msg:'error in Finding ',error:err});
        }
        else {
          res.send(data);
        }
      })
    }
  })
} ;