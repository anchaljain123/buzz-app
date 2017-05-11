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
    Buzz.find({},null,{sort:{'postCreated':-1}},(err,data) =>{
        if(err) console.log(err);
        else
        {
            res.send(data)
        }
    })
}

exports.deleteBuzz = function (buzzDetails,res) {

    const buzzId = buzzDetails.post._id;
    /*  const userId = buzzDetails.currentId;
     const findUser = {'userDetails.0':userId};*/
    Buzz.remove({'_id':buzzId},(err,data) =>{

        if(err) console.log(err);
        else{

            res.send(data)
        }

    })



    /* Buzz.find(findUser,(err,data) => {
     if(err) console.log(err);
     else
     {
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
     })*/

}

exports.updateBuzz = function (buzzDetails,res) {

    Buzz.find({'_id':buzzDetails.buzzid},(err,data)=>{
        if(err) console.log(err);
        else
        {
            Buzz.update({'_id':buzzDetails.buzzid},{ $set:{likescount:buzzDetails.like}},(err,data)=>{
                if(err) console.log(err);
                else
                {
                   Buzz.find({},(err,data) => {
                       if(err) console.log(err);
                       else
                       {
                           res.send(data)
                       }
                   })
                }
            })
        }
    })
}