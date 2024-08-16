const fs = require("node:fs");
const [X, N, ...list] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let total = 0;

for (let i = 0; i < parseInt(N); i++) {
    const [price, num] = list[i].split(" ").map(it => parseInt(it));
    total += price * num
}

if (total === parseInt(X)) console.log("Yes");
else console.log("No")