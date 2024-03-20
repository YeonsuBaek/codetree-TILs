var fs = require('fs');
var [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(str => Number(str));
console.log(a > b ? a * b : b / a)