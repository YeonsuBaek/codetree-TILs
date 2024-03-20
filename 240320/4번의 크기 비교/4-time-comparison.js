const fs = require('fs');
let [a, bcde] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
a = Number(a)
const [b, c, d, e] = bcde.split(' ').map(str => Number(str))

console.log(a > b ? 1 : 0)
console.log(a > c ? 1 : 0)
console.log(a > d ? 1 : 0)
console.log(a > e ? 1 : 0)