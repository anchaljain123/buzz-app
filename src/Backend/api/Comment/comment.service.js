const Comment = require('./comment.model');

exports.saveComment = function (buzzDetails,res) {

    buzzDetails.postId = buzzDetails.buzzid;
    buzzDetails.content = buzzDetails.comment;
    buzzDetails.userDetails = {
        userName:buzzDetails.userName,
        userid:buzzDetails.uid,
    };

    Comment.create(buzzDetails,(err,data) =>{
        if(err) console.log(err);
        else
        {
            res.send(data);
        }
    })
}

