const N = require("node:fs").readFileSync("/dev/stdin").toString()

for (let i = 1; i <= parseInt(N); i++) {
    const star = "*".repeat(i)
    console.log(star.padStart(parseInt(N), " "))
}