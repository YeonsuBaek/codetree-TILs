const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(nums => nums.split(' ').map(str => Number(str)));

let sum = 0
for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
        sum += input[i][j]
    }
}

console.log(sum)