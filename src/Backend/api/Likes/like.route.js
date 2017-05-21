const likeController = require('./like.controller');

module.exports = (app) => {

    app.put('/saveLike', likeController.saveLike);

    app.get('/getLikes',likeController.getLikes);

   // app.put('/saveDislike',likeController.saveDislike);

    app.get('/getDislikes',likeController.getDislikes);

    app.delete('/deleteLike',likeController.deletelikes);

};