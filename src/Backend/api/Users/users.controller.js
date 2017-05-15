const userService = require('./users.service');

exports.getUser = function (req,res,next) {
    userService.getUser(res);
}

exports.getCurrentUser = function (req,res,next) {

    const userID = req.user;
    userService.getCurrentUser(userID,res);
}
