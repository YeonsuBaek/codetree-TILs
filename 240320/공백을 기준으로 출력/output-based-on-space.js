const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(inp => inp.split(' ').join(''));
console.log(input.join(''))