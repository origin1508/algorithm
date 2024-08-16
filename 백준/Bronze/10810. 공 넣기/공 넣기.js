const [NM, ...list] = require("node:fs").readFileSync("/dev/stdin").toString().split("\n")

const [N, M] = NM.split(" ").map(it => parseInt(it))

const basket = new Array(N).fill(0)

for (let i = 0; i < M; i++) {
    const [start, end, num] = list[i].split(" ").map(it => parseInt(it))
    
    for (let j = start - 1; j < end; j++) {
        basket[j] = num
    }
}

console.log(basket.join(" "))