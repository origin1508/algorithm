const input = require("node:fs").readFileSync("/dev/stdin").toString().trim()

const reversedInput = input.split("").reverse().join("")
const [a, b] = reversedInput.split(" ").map(it => parseInt(it))

console.log(Math.max(a, b))