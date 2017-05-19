const Comment = require('./comment.model');

exports.saveComment = function (buzzDetails,res) {

    buzzDetails.postId = buzzDetails.buzzid;
    buzzDetails.comment = buzzDetails.content;
    buzzDetails.userDetails = {
        userName:buzzDetails.userName,
        userid:buzzDetails.uid,
        img:buzzDetails.userimage,
    };

    Comment.create(buzzDetails,(err,data) =>{
        if(err) console.log(err);
        else
        {
            res.send(data);
        }
    })
};

exports.getComments = function (res) {
    Comment.find({},(err,data) =>{
        if(err) console.log(err);
        else
        {
            res.send(data);
        }
    })
};

exports.deleteComment = (commentId,res) =>{

  Comment.remove({'_id':commentId.id},
    (err,data)=>{
    if(err)
      res.send({msg:"Failed to remove document",error:err});
    else {
      Comment.find((err,data)=>{
        if(err){
          res.send({msg:"Failed to fetch data",error:err})
        }
        else {
          res.send(data);
        }
      })
    }
  })
};