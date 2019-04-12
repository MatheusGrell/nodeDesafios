var input = require('fs').readFileSync('teste.txt', 'utf8');
var lines = input.split('\r\n');

var N = parseInt(lines[0])
var fatorial = 1;

if (N > 0 && N < 13) {
    for (i = 0; i < N; i++) {
        fatorial = (N - i) * fatorial;
    }
    console.log(fatorial);
} else {
    return;
}
