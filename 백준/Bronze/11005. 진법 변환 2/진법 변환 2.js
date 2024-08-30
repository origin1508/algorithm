let [N, B] = require("node:fs")
.readFileSync("/dev/stdin")
.toString()
.trim()
.split(" ")
.map(it => parseInt(it));

const num = new Array(26).fill(0).reduce((acc, _, i) => {
    acc[i + 10] = String.fromCharCode(i + 65);
    return acc
}, {})

let result = "";

while (N > 0) {
    let temp = N % B;
    
    if (temp > 9) {
        temp = num[temp]
    }
    result = temp + result;
    N = Math.floor(N / B)
}

console.log(result)