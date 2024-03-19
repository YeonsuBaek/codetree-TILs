var fs = require('fs');
var [first, second, third] = fs.readFileSync('/dev/stdin').toString().trim().split('-');
console.log(`${first}-${third}-${second}`)