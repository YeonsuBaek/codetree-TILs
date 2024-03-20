const fs = require('fs');
let a = fs.readFileSync("/dev/stdin").toString().trim();
a = Number(a)
console.log(a % 3 === 0 || a % 5 === 0 ? 1 : 0)