const User = require('./user.model');

exports.getUser = function (res) {
    User.find({},function (err,data) {
        if(err) console.log(err);
        else
        {
            res.send(data)
        }
    })

}








