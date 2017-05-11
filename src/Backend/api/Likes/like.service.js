const Like = require('./like.model');

exports.saveLike = function (buzzDetails,res) {

    buzzDetails.postId = buzzDetails.buzzid;
    buzzDetails.userDetails = {
        userName:buzzDetails.userName,
        userid:buzzDetails.uid,
    };
   //like only for one tome for a user
    Like.create(buzzDetails,(err,data) =>{
        if(err) console.log(err);
        else
        {
            res.send(data);
        }
    })
}


exports.getLike = function (res) {

    Like.find({},(err,data)=>{
        if(err) console.log(err);
        else
        {
            console.log(data)
            res.send(data);
        }
    })
}

