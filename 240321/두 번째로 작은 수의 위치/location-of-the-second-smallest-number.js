const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = input[0]
const list = input[1].split(' ').map(str => Number(str))
const newList = [...list]
const sortListSet = new Set(newList.sort((a, b) => a - b))
const sortList = [...sortListSet]
const secondNum = sortList[1]
const numOfSecondNum = list.filter(item => item === secondNum).length
console.log(numOfSecondNum === 1 ? list.findIndex(item => item === secondNum) + 1 : -1)