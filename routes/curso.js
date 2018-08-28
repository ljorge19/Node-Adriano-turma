module.exports = function(app) {
    var valida = require('./../middlewares/valida');

    var cursoController = app.controllers.cursoController;
    
    app.get('/curso/create', valida, cursoController.create);
    app.post('/curso/create', valida, cursoController.createAction);
    app.get('/curso/list', valida, cursoController.list);
};