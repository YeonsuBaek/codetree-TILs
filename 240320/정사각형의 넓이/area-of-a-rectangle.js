var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
const size = input * input
console.log(size < 5 ? 'tiny' : size)