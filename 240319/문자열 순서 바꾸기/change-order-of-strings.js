var fs = require('fs');
var [s, t] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(t)
console.log(s)