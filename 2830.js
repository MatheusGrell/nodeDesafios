var input = require('fs').readFileSync('teste.txt', 'utf8');
var lines = input.split('\r\n');

var K = parseInt(lines[0]);
var L = parseInt(lines[1]);

if (K && L >= 1 && K && L <= 16 && K != L) {

    if (K % 2 == 1 && L == K + 1 || L % 2 == 1 && K == L + 1) {
        console.log('oitavas');
    } else if (((K == 1 || K == 5 || K == 9 || K == 13) && L == K + 2 || L == K + 3)
        || (K == 2 || K == 6 || K == 10 || K == 14) && L == K + 1 || L == K + 2) {
        console.log('quartas');
    } else if (K <= 4 && L >= 5 && L <= 8
        || L <= 4 && K >= 5 && K <= 8
        || K <= 12 && K >= 9 && L >= 13 && L <= 16
        || L <= 12 && L >= 9 && K >= 13 && K <= 16) {
        console.log('semifinal');
    } else if (K <= 8 && L >= 8 || L <= 8 && K >= 8) {
        console.log('final');
    }
} else {
    return;
}





