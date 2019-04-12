var input = require('fs').readFileSync('teste.txt', 'utf8');
var lines = input.split('\r\n');

var linha = lines.shift().toUpperCase();
var palavra = [];
aliteral = true;

while (linha != '*') {
    aliteral = true;
    palavra = linha.split(' ');
    for (var i = 0; i < palavra.length; i++) {
        if (palavra[i][0] != palavra[0][0]) {
            aliteral = false;
            break;
        }
    }
    if (aliteral)
        console.log('Y');
    else {
        console.log('N');
    }

    linha = lines.shift().toUpperCase();
}

