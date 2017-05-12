const Like = require('./like.model');

exports.saveLike = function (buzzDetails,res) {

    buzzDetails.postId = buzzDetails.buzzid;
    buzzDetails.userDetails = {
        userName:buzzDetails.userName,
        userid:buzzDetails.uid,
    };
   //like only for one time for a user

/*   Like.remove({'postId':buzzDetails.buzzid,'userDetails.userid':buzzDetails.uid},(err,data) =>{ //already exists

        if(err) console.log(err);
        else {
          console.log("deleted")
        }

    })*/

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
            res.send(data);
        }
    })
}

