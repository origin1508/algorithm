const [N, ...point] = require("node:fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const area = new Array(100).fill(0).map(_ => new Array(100).fill(0));
let result = 0;

for (let i = 0; i < parseInt(N); i++) {
    const [x, y] = point[i].split(" ").map(it => parseInt(it) - 1);
    
    for (let row = x; row < x + 10; row++) {
        for (let col = y; col < y + 10; col++) {
            if (area[row][col] === 0) {
                result++
                area[row][col] = 1;
            }
        }
    }
}

console.log(result);