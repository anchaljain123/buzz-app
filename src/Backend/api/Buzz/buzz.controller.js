const buzzService = require('./buzz.service');

exports.saveBuzz = function (req,res,next) {
    console.log(req.files, "req.files");
    console.log(req.file, "req.file");
    const buzzDetails = req.body;
    buzzDetails.postCreated = new Date();
    buzzDetails.img = req.file;
    buzzService.saveBuzz(buzzDetails,res);
}

exports.getBuzz = function (req,res,next) {
    buzzService.getBuzz(res);
}

exports.deleteBuzz = function (req,res,next) {

    const buzzDetails = req.body;

    buzzService.deleteBuzz(buzzDetails,res);
}