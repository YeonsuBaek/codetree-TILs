const fs = require('fs');
let [table1, table2] = fs.readFileSync("/dev/stdin").toString().trim().split("\n\n");
table1 = table1.split('\n').map(list => list.split(' ').map(str => Number(str)))
table2 = table2.split('\n').map(list => list.split(' ').map(str => Number(str)))

for (let i = 0; i < 3; i++) {
    let multi = []
    for (let j = 0; j < 3; j++) {
        multi.push(table1[i][j] * table2[i][j])
    }
    console.log(multi.join(' '))
}