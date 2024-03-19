var fs = require('fs');
var [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(`${a} ${b} ${Number(a) + Number(b)}`)