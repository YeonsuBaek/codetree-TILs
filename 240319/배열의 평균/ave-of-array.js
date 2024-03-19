const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let width = []
for (let w = 0; w < 2; w++) {
    const sum = input[w].split(' ').reduce((acc, cur) => acc + Number(cur), 0)
    width.push((sum / 4).toFixed(1))
}

console.log(width.join(' '))

let height = []
for (let h = 0; h < 4; h++) {
    const a = input[0].split(' ')
    const b = input[1].split(' ')
    const sum = Number(a[h]) + Number(b[h])
    height.push((sum / 2).toFixed(1))
}

console.log(height.join(' '))

const sum = input.reduce((acc, cur) => {
    const sum2 = cur.split(' ').map(str => Number(str)).reduce((acc, cur) => acc + cur, 0)
    return acc + sum2
}, 0)

console.log((sum / 8).toFixed(1))