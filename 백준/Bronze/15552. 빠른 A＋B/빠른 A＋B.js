const [T, ...list] = require("node:fs")
                     .readFileSync("/dev/stdin")
                     .toString()
                     .trim()
                     .split("\n")

let result = ""

for (let i = 0; i < parseInt(T); i++) {
    const [a, b] = list[i].split(" ").map(it => parseInt(it))
    result += (a + b).toString() + "\n"
}

console.log(result)