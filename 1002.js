var input = require('fs').readFileSync('', 'utf8');
var lines = input.split('\r\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 var n = 3.14159; 
 var R = parseFloat(lines[0]);

 console.log("A= " + (n*(R*R)).toFixed(4));
