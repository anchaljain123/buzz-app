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

exports.getBuzz = function (res) {
    Buzz.find({},(err,data) =>{
        if(err) console.log(err);
        else
        {
            res.send(data)
        }
    })
}

exports.deleteBuzz = function (buzzDetails,res) {

    const buzzId = buzzDetails._id;
    Buzz.remove({'_id':buzzId},(err,data) =>{

        if(err) console.log(err);

        else{
           Buzz.find({},(err,data) =>{
               if(err) console.log(err);
               else
               {
                   res.send(data);
               }

           })
        }

    })
}