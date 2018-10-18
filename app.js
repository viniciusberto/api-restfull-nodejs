var app = require('./app_config');
var db = require('./db_config');
var UserController = require('./app/controllers/UserController');

var validator = require('validator');

app.get('/', function (req, res) {
});

app.get('/users', function (req, res) {
    UserController.list(function (resp) {
        res.json(resp);
    });
});

app.get('/users/:id', function (req, res) {
    var id = validator.trim(validator.escape(req.param('id')));
    UserController.user(id, function (resp) {
        res.json(resp);
    });
});

app.post('/users', function (req, res) {
    var fullname = validator.trim(validator.escape(req.param('fullname')));
    var email = validator.trim(validator.escape(req.param('email')));
    var password = validator.trim(validator.escape(req.param('password')));

    UserController.save(fullname, email, password, function (resp) {
        res.json(resp);
    });
});

app.put('/users', function (req, res) {
    var id = validator.trim(validator.escape(req.param('id')));
    var fullname = validator.trim(validator.escape(req.param('fullname')));
    var email = validator.trim(validator.escape(req.param('email')));
    var password = validator.trim(validator.escape(req.param('password')));

    UserController.update(fullname, email, password, id, function (resp) {
        res.json(resp);
    });
});

app.delete('/users/:id', function (req, res) {
    var id = validator.trim(validator.escape(req.param('id')));

    UserController.delete(id, function (resp) {
        res.json(resp);
    });
});
