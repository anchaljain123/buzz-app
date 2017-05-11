const likeController = require('./like.controller');

module.exports = (app) => {

    app.post('/savehit', likeController.saveLike);

    app.get('/getLike',likeController.getLike);

}