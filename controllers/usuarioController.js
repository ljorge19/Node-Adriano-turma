module.exports = function(app) {

    var mongoose = require('mongoose');
    var usuarios = mongoose.model('usuarios');

    var usuarioController = {
        list: function(req, res){
            usuarios.find(function (erro, usuarioList) {
                if (erro) {
                    res.render('/');
                } else {
                    res.render('usuario/list', {
                        usuarios: usuarioList
                    });
                }
            });
        },
        create: function(req, res) {
            res.render('usuario/create');
        },
        createAction: function(req, res) {
            console.log(req.body);
            usuarios.create({
                name: req.body.user.name,
                login: req.body.user.login,
                password: req.body.user.password
            }, function(err, usuario) {
                console.log(err);
                if(err || !usuario){
                    res.redirect('/usuario/create?message=Falha ao inserir dados');
                }else{
                    res.redirect('/usuario/list');
                }
            });
        },
        login: function(req, res) {
            res.render('usuario/login');
        },
        loginAction: function(req, res) {
            usuarios.findOne({ 
                'login': req.body.user.login, 
                'password': req.body.user.password 
            }, function(err, usuario) {
                
                console.log(usuario);
                console.log(err);

                if(err || !usuario){
                    res.redirect('/usuario/login?message=dados não conferem');
                }else{
                    req.session.usuario = usuario;
                    res.redirect('/');
                }
            });

        },
    };

    return usuarioController;
};