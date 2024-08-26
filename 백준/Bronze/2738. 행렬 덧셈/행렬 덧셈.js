const line = require("node:fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = line[0].split(" ").map(it => parseInt(it));

const a = line.slice(1, 1 + N).map(it => it.split(" ").map(it => parseInt(it)));
const b = line.slice(1 + N).map(it => it.split(" ").map(it => parseInt(it)));
let result = []

for (let i = 0; i < N; i++) {
    const temp = a[i].map((it, idx) => it + b[i][idx]);
    result.push(temp.join(" "));
}

console.log(result.join("\n"));