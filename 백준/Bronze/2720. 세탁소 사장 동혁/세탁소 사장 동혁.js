const line = require("node:fs")
.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")
.map(it => parseInt(it));

const coins = [25, 10, 5, 1];

function calcChange(price) {
    const result = [];
    for (let i = 0; i < coins.length; i++) {
        result.push(Math.floor(price / coins[i]));
        price %= coins[i]
    }
    return result.join(" ");
}

for (let i = 1; i < line.length; i++) {
    console.log(calcChange(line[i]))
}