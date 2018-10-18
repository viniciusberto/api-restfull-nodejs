var dbString = "mongodb://127.0.0.1/apirestfull";
const mongoose = require('mongoose');
mongoose.connect(dbString, {useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao connectar com o banco de dados.'));
db.once('open', function () {
    var userSchema = mongoose.Schema({
        fullname: String,
        email: String,
        password: String,
        created_at: Date
    });
    exports.User = mongoose.model('User', userSchema);
});