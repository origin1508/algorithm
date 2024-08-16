const [T, ...list] = require("node:fs").readFileSync("/dev/stdin").toString().split("\n")

for (let i = 0; i < parseInt(T); i++) {
    const [a, b] = list[i].split(" ").map(it => parseInt(it))
    console.log(`Case #${i + 1}: ${a + b}`)
}