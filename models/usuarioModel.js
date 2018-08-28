module.exports = function(app) {

    var mongoose = require('mongoose')
    var schema = mongoose.Schema;

    var usuario = schema({
        name: { type: String, required: true },
        login: { type: String, required: true, index: { unique: true } },
        password: { type: String, required: true }
    });

    return mongoose.model('usuarios', usuario);
}