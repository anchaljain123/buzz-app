const buzzService = require('./buzz.service');

exports.saveBuzz = function (req,res,next) {

    const buzzDetails = req.body;
    buzzDetails.postCreated = new Date();
    buzzDetails.img = req.file;
    buzzDetails.userimg = req.body.userimg;
    buzzService.saveBuzz(buzzDetails,res);
}

exports.getBuzz = function (req,res,next) {
    buzzService.getBuzz(res);
}

exports.deleteBuzz = function (req,res,next) {

    const buzzDetails = req.body;


    buzzService.deleteBuzz(buzzDetails,res);
}