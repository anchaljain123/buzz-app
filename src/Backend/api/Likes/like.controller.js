const likeService = require('./like.service');


exports.saveLike = function (req,res,next) {
    const buzzDetails = req.body;
    likeService.saveLike(buzzDetails,res);
};

exports.getLike = function (req,res,next) {
    likeService.getLike(res)
};