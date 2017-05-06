const buzzService = require('./buzz.service');

exports.saveBuzz = function (req,res,next) {
    const buzzDetails = req.body;
    buzzDetails.postCreated = new Date();
    buzzService.saveBuzz(buzzDetails,res);
}

exports.getBuzz = function (req,res,next) {
    buzzService.getBuzz(res);
}