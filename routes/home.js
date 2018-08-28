module.exports = function(app) {
  var valida = require('./../middlewares/valida');

  var homeController = app.controllers.homeController;

  app.get('/', valida, homeController.index);
  
  // app.post('/login', home.login);
  // app.get('/logout', home.logout);

  // app.post('/novoUsuario', home.novoUsuario);
  
};