const Buzz = require('./buzz.model');

exports.saveBuzz = function (buzzDetails,res) {
    Buzz.create(buzzDetails,(err,data) =>{
        if(err) console.log(err);
        else
        {
            res.send(data);
        }
    })
}
