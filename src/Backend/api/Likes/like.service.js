const Like = require('./like.model');

exports.saveLike = function (buzzDetails,res) {

  Like.update({'postId':buzzDetails.buzzid,'userDetails.userid':buzzDetails.uid},{$set:{like:true}},{ upsert: true},(err,data)=>{
    if(err) console.log(err);
    else
    {
      res.send(data);
    }
  })


};

exports.getLikes = function (res) {

  Like.find({like:true},(err,data)=>{
    if(err) console.log(err);
    else
    {
      res.send(data);
    }
  })
};

exports.saveDislike = function (buzzDetails,res) {

  buzzDetails.postId = buzzDetails.buzzid;
  buzzDetails.userDetails = {
    userName:buzzDetails.userName,
    userid:buzzDetails.uid,
  };
  buzzDetails.like=false;

  Like.update({'postId':buzzDetails.buzzid,'userDetails.userid':buzzDetails.uid},{$set:{like:false}},{ upsert: true},(err,data)=>{
    if(err) console.log(err);
    else
    {
      res.send(data);
    }
  })

};

exports.getDislikes = function (res) {

  Like.find({'like':false},(err,data)=>{
    if(err) console.log(err);
    else
    {

      res.send(data);
    }
  })
}