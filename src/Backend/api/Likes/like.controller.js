const likeService = require('./like.service');


exports.saveLike = function (req,res,next) {
    const buzzDetails = req.body;
    likeService.saveLike(buzzDetails,res);
};

exports.getLikes = function (req,res,next) {
    likeService.getLikes(res)
};

exports.saveDislike = function (req,res,next) {
    const buzzDetails = req.body;
    likeService.saveDislike(buzzDetails,res);
};

exports.getDislikes = function (req,res,next) {
    likeService.getDislikes(res)
};

exports.deletelikes = (req,res,next) => {
  likeService.deletelikes(req.body,res)
};
