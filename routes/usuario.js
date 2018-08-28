module.exports = function(app) {
    var valida = require('./../middlewares/valida');

    var usuarioController = app.controllers.usuarioController;

    app.get('/usuario/list', valida, usuarioController.list);
    app.get('/usuario/create', valida, usuarioController.create);
    app.post('/usuario/create', valida, usuarioController.createAction);

    app.get('/usuario/login', usuarioController.login);
    app.post('/usuario/loginAction', usuarioController.loginAction);
};