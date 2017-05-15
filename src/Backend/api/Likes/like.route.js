const likeController = require('./like.controller');

module.exports = (app) => {

    app.post('/saveLike', likeController.saveLike);

    app.get('/getLikes',likeController.getLikes);

    app.put('/saveDislike',likeController.saveDislike);

    app.get('/getDislikes',likeController.getDislikes);

}