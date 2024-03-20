const fs = require('fs');
const [a, b, c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(str => Number(str));
console.log(b > a && b < c ? 1 : 0)