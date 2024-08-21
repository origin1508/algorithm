const [string, i] = require("node:fs")
                    .readFileSync("/dev/stdin")
                    .toString()
                    .trim()
                    .split("\n");

console.log(string[parseInt(i) - 1])