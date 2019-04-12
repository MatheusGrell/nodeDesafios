var input = require('fs').readFileSync('teste.txt', 'utf8');
var lines = input.split('\r\n');

for (var i = 0; i < lines.length; i++) {
    if (i % 2 == 0) {
        var K = parseInt(lines[i]);
    } else if (i % 2 == 1) {
        var L = parseInt(lines[i]);
    }
}

//Final
if (K <= 8 && L >= 8 || L <= 8 && K >= 8 || K <= 16 && L >= 9 || L <= 16 && K >= 9) {
    console.log('final');
} else if (K <= 4 && L >= 5 && L <= 8
    || L <= 4 && K >= 5 && K <= 8
    || K <= 12 && K >= 9 && L >= 13 && L <= 16
    || L <= 12 && L >= 9 && K >= 13 && K <= 16) {
    console.log('semifinal');
}else if(K % 2 == 1 && L == K+1 || L % 2 == 1 && K == L+1){
    console.log('oitavas');
}