const commentController = require('./comment.controller');

module.exports = (app) =>{

    app.post('/saveComment',commentController.saveComment);

}