module.exports = function(app) {

    var mongoose = require('mongoose');
    var cursos = mongoose.model('cursos');

    var cursoController = {
        list: function(req, res) {
            cursos.find(function (erro, cursoList) {
                if (erro) {
                    res.render('/');
                } else {
                    res.render('curso/list', {
                        cursos: cursoList
                    });
                }
            });
        },
        create: function(req, res) {
            res.render('curso/create');
        },
        createAction: function(req, res) {
            cursos.create({
                codigo: req.body.curso.codigo,
                descricao: req.body.curso.descricao,
                ch: req.body.curso.ch,
                categoria: req.body.curso.categoria
            }, function(err, curso) {
                if(err || !curso){
                    res.redirect('/curso/create?message=Falha ao inserir dados');
                }else{
                    res.redirect('/curso/list');
                }
            });

        },
    };

    return cursoController;
};