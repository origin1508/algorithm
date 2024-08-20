const input = require("node:fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(it => parseInt(it));
const basket = new Array(N).fill(0).map((_, idx) => idx+1);

for (let i = 1; i < input.length; i++) {
    const [x, y] = input[i].split(" ").map(it => parseInt(it) - 1);
    [basket[x], basket[y]] = [basket[y], basket[x]]
}

console.log(basket.join(" "))