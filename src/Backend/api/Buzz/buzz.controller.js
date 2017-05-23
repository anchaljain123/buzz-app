const buzzService = require('./buzz.service');

exports.saveBuzz = function (req,res,next) {
    const buzzDetails = req.body;
    buzzDetails.postCreated = new Date();
    buzzDetails.img = req.file;
    buzzDetails.userDetails = JSON.parse(buzzDetails.userDetails);

    if(buzzDetails.img||buzzDetails.content)
    buzzService.saveBuzz(buzzDetails,res);
};

exports.getBuzz = function (req,res,next) {
 let offset = parseInt(req.param('offset'));

    buzzService.getBuzz(offset,res)
    .then(data=>res.send(data))
      .catch(err=>res.send(err))
};

exports.deleteBuzz = function (req,res,next) {
    const buzzDetails = req.body;
    buzzService.deleteBuzz(buzzDetails,res);
};

/*
exports.updateBuzz = function (req,res,next) {

    req.on('data',function () {

      buzzService.updateBuzz(buzzDetails,res);
    });
    req.on('error',function () {
      res.send('error')
    })
};*/

exports.getlostnfoundBuzz = (req,res,next) => {
  buzzService.getlostnfoundBuzz(res);
};