const fs = require('fs');
const [p1, p2] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [age1, sex1] = p1.split(' ')
const [age2, sex2] = p2.split(' ')
console.log((Number(age1) >= 19 && sex1 === 'M') || (Number(age2) >= 19 && sex1 === 'M') ? 1 :0)