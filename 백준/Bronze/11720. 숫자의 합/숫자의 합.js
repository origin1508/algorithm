const [N, numbers] = require("node:fs")
                    .readFileSync("/dev/stdin")
                    .toString()
                    .trim()
                    .split("\n");

const result = numbers.split("").map(it => parseInt(it)).reduce((acc, cur) => acc += cur,0)
console.log(result)