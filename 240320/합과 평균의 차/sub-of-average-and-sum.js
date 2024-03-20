let fs = require('fs');
let [a, b, c] = fs.readFileSync('/dev/stdin').toString().split(' ').map(str => Number(str));
const sum = a + b + c
const avg = (a + b + c) / 3
console.log(sum)
console.log(avg)
console.log(sum - avg)