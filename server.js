var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/getTableData', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(8080, function () {
    console.log('Server started on', server.address().port);
});