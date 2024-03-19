let fs = require('fs');
let [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ');

for (let i = 0; i < n; i++) {
    let list = []
    for (let j = 0; j < m; j++) {
        if (j > 0 && j % 2 !== 0) {
            list.push(n * (j + 1) - i - 1)
        } else {
            list.push(n * j + i)
        }
    }
    console.log(list.join(' '))
}