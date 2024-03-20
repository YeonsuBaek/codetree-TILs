var fs = require('fs');
var a = fs.readFileSync('/dev/stdin').toString().trim();
console.log(a === '1' ? 't' : 'f')