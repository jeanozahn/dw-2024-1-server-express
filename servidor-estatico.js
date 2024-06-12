var express = require('express');
var app = express();

var servidor = app.listen(8080, function() {
    var porta = servidor.address().port;
    console.log("Servidor executando na porta %s", porta);
});

app.use(express.static('img'));
app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var face = Math.floor(
        Math.random() * 6 + 1);
        res.end('<h1>Jogo de Dados</h1><img src="Dado_' + face + '.jpg">');
});




