var fs = require('fs');
var [ab, c] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var [a, b] = ab.split(' ')
console.log(`${a} ${b} ${c}`)