var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var a = Number(input); 

console.log(a % 3 === 0 ? 'YES' : 'NO')
console.log(a % 5 === 0 ? 'YES' : 'NO')