var fs = require('fs');
var a = fs.readFileSync('/dev/stdin').toString().trim();

console.log((Number(a) + 1.5).toFixed(2))