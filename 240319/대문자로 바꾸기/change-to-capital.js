const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < 5; i++) {
    console.log(input[i].toUpperCase())
}