var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
const size = input * input
console.log(size)
if (input < 5) {
    console.log('tiny')
}