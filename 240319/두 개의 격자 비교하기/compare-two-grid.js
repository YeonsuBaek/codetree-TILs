const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(' ').map(str => Number(str))
const table1 = input.slice(1, n + 1).map(list => list.split(' ').map(str => Number(str)))
const table2 = input.slice(n + 1).map(list => list.split(' ').map(str => Number(str)))

for (let i = 0; i < n; i++) {
    let list = []
    for (let j = 0; j < m; j++) {
        if (table1[i][j] === table2[i][j]) {
            list.push(0)
        } else {
            list.push(1)
        }
    }
    console.log(list.join(' '))
}