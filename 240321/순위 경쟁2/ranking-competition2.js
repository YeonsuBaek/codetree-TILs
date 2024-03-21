const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = input[0]
let scores = { A: 0, B: 0 }
let count = 0
let win = ''

for (let i = 1; i <= n; i++) {
    const [person, score] = input[i].split(' ')
    scores[person] += Number(score)
    if (scores.A > scores.B) {
        if (win !== 'A') {
            win = 'A'
            count += 1
        }
    } else if (scores.A === scores.B) {
        if (win !== '') {
            win = ''
            count+= 1
        }
    } else {
        if (win !== 'B') {
            win = 'B'
            count+= 1
        }
    }
}

console.log(count)