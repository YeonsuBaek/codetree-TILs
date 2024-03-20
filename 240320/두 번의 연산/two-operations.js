var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var a = Number(input); 

if (a % 2 !== 0) {
    a += 3
}

if (a % 3 === 0) {
    a = Math.floor(a / 3)
}

console.log(a)