var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = Number(input)
if (n >= 3000) console.log('book')
else if (n < 3000 && n >= 1000) console.log('mask')
else console.log('no')