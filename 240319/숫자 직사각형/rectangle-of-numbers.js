let fs = require('fs');
let [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(str => Number(str));
let table = Array(n).fill(0).map(() => Array(m).fill(0))

let num = 1
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        table[i][j] = num
        num++
    }
    console.log(table[i].join(' '))
}