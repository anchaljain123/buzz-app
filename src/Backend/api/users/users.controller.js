const userService = require('./users.service');

exports.getUser = function (req,res,next) {
    userService.getUser(res);
}

