module.exports = function(app) {

    // var usuario = mongoose.model('usuarios');

    // var HomeController = {
    //     index: function(req, res) {
    //         res.render('home/index');
    //     },
    //     login: function(request, response) {

    //         var nome = request.body.usuario.nome;
    //         var senha = request.body.usuario.senha;

    //         usuario.findOne({ 'nome': nome, 'senha': senha })
    //                 .select('nome senha')
    //                 .exec(function(erro, usuario){
    //             console.log(erro);
    //             console.log(usuario);   
    //             if (erro || !usuario) {
    //                 response.redirect('/');
    //             } else {
    //                 request.session.usuario = usuario;
    //                 response.redirect('/menu');
    //             }
    //         });

    //         // if (nome == 'admin' && senha == 'admin') {
    //         //     var usuario = request.body.usuario;
    //         //     request.session.usuario = usuario;
    //         //     response.redirect('/menu');
    //         // } else {
    //         //     response.redirect('/');
    //         // }
    //     },
    //     logout: function(request, response) {
    //         request.session.destroy();
    //         response.redirect('/');
    //     },

    //     //cadastro de usuários
    //     novoUsuario: function(request, response) {
    //         var nome = request.body.usuario.nome;
    //         var senha = request.body.usuario.senha;
    //         var confirma = request.body.usuario.confirma;
            
    //         //código a ser implementado
    //         if ((senha != confirma) || nome.trim().length == 0) {
    //             response.redirect('/');
    //         }else {
                
    //             try{
    //                 usuario.create(request.body.usuario, function (erro, usuario) {
    //                     if (erro) {
    //                         response.redirect('/');
    //                     }
    //                 });
    //             }catch(err){
    //                 console.log(err);
    //                 response.redirect('/');
    //             }

    //         }

    //         response.redirect('/menu');
    //     }
    // };

    var mongoose = require('mongoose');

    var homeController = {
        index: function(req, res) {
            console.log('index');
            res.render('home/index');
        },
    };

    return homeController;
};