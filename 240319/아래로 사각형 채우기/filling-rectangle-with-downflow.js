var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = input; 

for (let i = 1; i <= n; i++) {
    let list = []
    for (let j = 0; j < n; j++) {
        list.push(i + n * j)
    }
    console.log(list.join(' '))
}