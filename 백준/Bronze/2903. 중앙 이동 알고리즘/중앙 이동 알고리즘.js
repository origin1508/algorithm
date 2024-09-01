const N = parseInt(require("node:fs").readFileSync("/dev/stdin").toString());

const square = new Array(N + 1);
square[0] = 2;

for (let i = 1; i <= N; i++) {
    square[i] = (square[i - 1] * 2) - 1;
}

console.log(square[N] ** 2);
