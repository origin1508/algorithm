const fs = require("node:fs");
const input = fs.readFileSync("/dev/stdin")
                .toString()
                .split(" ")
                .map(it => parseInt(it));

const [num1, num2, num3] = input;
let result;
if (num1 === num2 && num2 === num3) {
    result = 10000 + (1000 * num1)
} else if (num1 === num2) {
    result = 1000 + (100 * num1)
} else if (num2 === num3) {
    result = 1000 + (100 * num2)
} else if (num1 === num3) {
    result = 1000 + (100 * num3)
} else {
    result = 100 * Math.max(num1, num2, num3)
}

console.log(result)
