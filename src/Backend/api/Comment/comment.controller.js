const commentService = require('./comment.service');


exports.saveComment = function (req,res,next) {
    const buzzDetails = req.body;
    commentService.saveComment(buzzDetails,res);
};

exports.getComment = function (req,res,next) {
    commentService.getComment(res);
}