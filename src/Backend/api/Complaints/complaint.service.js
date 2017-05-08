const Complain = require('./complaint.model');

exports.saveComplain = function (complainDetails,res) {
    Complain.create(complainDetails,(err,data) =>{
        if(err) console.log(err);
        else
        {
            res.send(data);
        }
    })
}


exports.getComplain = function (res) {

    Complain.find({},(err,data) =>{
        if(err){
            console.log(err)
        }
        else {
            res.send(data);
        }
    })
}