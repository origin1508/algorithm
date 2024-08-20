const input = require("node:fs")
            .readFileSync("/dev/stdin")
            .toString()
            .trim()
            .split("\n");

const [N, M] = input[0].split(" ").map(it => parseInt(it));

const array = new Array(N).fill(0).map((_, idx) => idx + 1);

for (let i = 1; i < input.length; i++) {
    const [x, y] = input[i].split(" ").map(it => parseInt(it) - 1);
    const temp = array.slice(x, y + 1).reverse();
    
    array.splice(x, y - x + 1, ...temp)
}

console.log(array.join(" "))