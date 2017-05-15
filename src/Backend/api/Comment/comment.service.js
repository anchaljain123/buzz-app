const Comment = require('./comment.model');

exports.saveComment = function (buzzDetails,res) {

    buzzDetails.postId = buzzDetails.buzzid;
    buzzDetails.comment = buzzDetails.content;
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

exports.getComments = function (res) {
    Comment.find({},(err,data) =>{
        if(err) console.log(err);
        else
        {
            console.log(data,"<<<<<<<<<<<<<<<<<<<<<<")
            res.send(data);
        }
    })
}
