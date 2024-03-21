const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(list => list.split(''))

let B = []
let R = []
let L = []

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (input[i][j] === 'B') {
            B = [i, j]
        }
        if (input[i][j] === 'R') {
            R = [i, j]
        }
        if (input[i][j] === 'L') {
            L = [i, j]
        }
    }
}

const visited = new Array(10).fill(0).map(() => new Array(10).fill('.'))
const queue = []

queue.push({ x: L[0], y: L[1], dist: 0 })
visited[L[0]][L[1]] = 'v'

const dx = [0, 0 , 1, -1]
const dy = [1, -1, 0, 0]

while (queue.length > 0) {
    const { x, y, dist } = queue.shift()

    if (x === B[0] && y === B[1]) {
        console.log(dist - 1)
        return
    }

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i]
        const ny = y + dy[i]

        if (nx < 0 || nx >= 10 || ny < 0 || ny >= 10) continue

        if (input[nx][ny] === 'R' || visited[nx][ny] === 'v') continue

        queue.push({ x: nx, y: ny, dist: dist + 1 })
        visited[nx][ny] = 'v'
    }
}