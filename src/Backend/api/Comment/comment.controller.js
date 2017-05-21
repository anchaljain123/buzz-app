const commentService = require('./comment.service');


exports.saveComment = function (req,res,next) {
    const buzzDetails = req.body;
    commentService.saveComment(buzzDetails,res);
};

exports.getComments = function (req,res,next) {
    commentService.getComments(res);
};

exports.deleteComment = (req,res,next) => {
  let commentData =  req.body;
  commentService.deleteComment(commentData,res);
};

exports.deleteComments = (req,res,next) => {
  commentService.deleteComments(req.body,res);
};