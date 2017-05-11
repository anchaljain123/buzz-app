const commentService = require('./comment.service');


exports.saveComment = function (req,res,next) {
    const buzzDetails = req.body;
    commentService.saveComment(buzzDetails,res);
};

