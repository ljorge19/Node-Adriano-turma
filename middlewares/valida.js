module.exports = function(request, response, next) {
    
    if (!request.session.usuario) {
        return response.redirect('/usuario/login');
    }
    
    return next();
};