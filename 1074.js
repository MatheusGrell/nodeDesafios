var input = require('fs').readFileSync('teste.txt', 'utf8');
var lines = input.split('\r\n');

for (i = 0; i < lines.length; i++) {
    var N = parseInt(lines[i+1]);
    if (N % 2 == 1 && N > 0) {
        console.log('ODD POSITIVE');
    } else if (N % 2 == -1 && N < 0) {
        console.log('ODD NEGATIVE');
    } else if (N % 2 == 0 && N > 0) {
        console.log('EVEN POSITIVE');
    } else if (N % 2 == 0 && N < 0) {
        console.log('EVEN NEGATIVE');
    } else if (N == 0) {
        console.log('NULL');
    }
}