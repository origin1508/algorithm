const line = require("node:fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < line.length - 1; i++) {
    const [a, b] = line[i].split(" ").map(it => parseInt(it));
    
    if (b % a === 0) {
        console.log("factor");
    } else if (a % b === 0) {
        console.log("multiple");
    } else {
        console.log("neither")
    }
}