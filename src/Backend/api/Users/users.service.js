const User = require('./user.model');

exports.getUser = function (res) {
    User.find({},function (err,data) {
        if(err) res.send({error:err});
        else
        {
            res.send(data)
        }
    })

};

exports.getCurrentUser = function (userId,res) {

    const userID = {_id:userId};

    User.find(userID,(err,user)=>{
        if(err){
            res.send({msg:err});
        }
        else
        {
            res.send(user);
        }
    })
};








