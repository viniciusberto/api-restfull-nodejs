var express = require('express');
var app = express();



app.listen(5000);



app.get('/', function (req, res) {
    res.end('SERVIDOR OK');
});

app.get('/test', function (req, res) {
    res.end('SERVIDOR OK no test he he he');
});
