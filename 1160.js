var input = require('fs').readFileSync('teste.txt', 'utf8');
var lines = input.split('\r\n');

var T = lines.shift();
var numero = [];
aliteral = true;

var PA;
var PB;
var G1;
var G2;

while (T != '') {
    aliteral = true;
    numero = T.split(' ');
    for (i = 0; i < numero.length; i++) {
        if (numero[0]) {
            numero[0] = parseInt(PA);
        } else if (numero[1]) {
            numero[1] = parseInt(PB);
        } else if (numero[2]) {
            numero[2] = parseInt(G1);
        } else if (numero[3]) {
            numero[3] = parseInt(G2);
        }
    }
    if (aliteral)
        var crescimentoA = (((PA * G1) / 100) + PA);
        var crescimentoB = (((PB * G2) / 100) + PB);
    if (crescimentoA > crescimentoB) {
        console.log(parseInt(crescimentoA) + ' anos');
    }

    else {
        console.log('N');
    }

    T = lines.shift();
}
