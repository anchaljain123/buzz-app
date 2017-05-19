const commentController = require('./comment.controller');

module.exports = (app) =>{

    app.post('/saveComment',commentController.saveComment);
    app.get('/getComments',commentController.getComments);
    app.delete('/deleteComment',commentController.deleteComment);

};