const [N, list] = require("node:fs").readFileSync("/dev/stdin").toString().split("\n")
const numbers = list.split(" ").map(it => parseInt(it))

let max = -1000000
let min = 1000000

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    if (num > max) max = num
    if (num < min) min = num
}

console.log(min, max)