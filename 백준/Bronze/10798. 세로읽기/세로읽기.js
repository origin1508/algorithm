const input = require("node:fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const result = [];

input.forEach(str => {
    str.split("").forEach((c, idx) => {
        if (result[idx]) {
            result[idx] += c;
        } else {
            result[idx] = c;
        }
    })
})

console.log(result.join(""));