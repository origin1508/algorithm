const words = require("node:fs")
            .readFileSync("/dev/stdin")
            .toString()
            .trim()
            .split(" ")

let result = 0;
words.forEach(word => {
    if (word) result++
})

console.log(result)