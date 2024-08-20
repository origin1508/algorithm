const [N, point] = require("node:fs")
                    .readFileSync("/dev/stdin")
                    .toString()
                    .trim()
                    .split("\n");

const n = parseInt(N);
const pointArr = point.split(" ").map(it => parseInt(it));

const maxPoint = Math.max(...pointArr);
const result = pointArr.map(point => point / maxPoint * 100)
                       .reduce((acc, cur) => acc += cur, 0) / n

console.log(result)
