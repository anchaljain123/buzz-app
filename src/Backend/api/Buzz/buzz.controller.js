const buzzService = require('./buzz.service');


exports.saveBuzz = function (req,res,next) {
    const buzzDetails = req.body;
    buzzDetails.postCreated = new Date();
    buzzDetails.img = req.file;
    buzzDetails.userDetails = JSON.parse(buzzDetails.userDetails);
    buzzService.saveBuzz(buzzDetails,res);
}

exports.getBuzz = function (req,res,next) {
    buzzService.getBuzz(res);
}

exports.deleteBuzz = function (req,res,next) {
    const buzzDetails = req.body;
    buzzService.deleteBuzz(buzzDetails,res);
}

exports.updateBuzz = function (req,res,next) {
    const buzzDetails = req.body;
    console.log(buzzDetails,"+++++++++++++++++++++++++==")
    buzzService.updateBuzz(buzzDetails,res);
}