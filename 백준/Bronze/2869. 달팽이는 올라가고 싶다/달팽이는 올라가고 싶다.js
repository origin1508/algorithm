const [a, b, v] = require("node:fs")
.readFileSync("/dev/stdin").
toString()
.trim()
.split(" ");

const result = Math.ceil((v - a) / (a - b)) + 1
console.log(result);

