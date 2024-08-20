const nums = require("node:fs")
            .readFileSync("/dev/stdin")
            .toString()
            .trim()
            .split("\n")
            .map(it => parseInt(it));

const result = new Set();

nums.forEach(num => {
    const remain = num % 42
    result.add(remain)
})

console.log(result.size)