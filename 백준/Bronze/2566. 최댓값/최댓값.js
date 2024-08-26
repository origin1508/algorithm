const array = require("node:fs")
                .readFileSync("/dev/stdin")
                .toString()
                .trim()
                .split("\n")
                .map(line => line.split(" ").map(it => parseInt(it)));

let result = 0;
let x = 0;
let y = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
        if (result <= array[i][j]) {
            result = array[i][j];
            x = i + 1;
            y = j + 1;
        }
    }
}

console.log(result);
console.log(x, y);