const [N, B] = require("node:fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const num = new Array(26).fill(0).reduce((acc, _, i) => {
    acc[String.fromCharCode(i + 65)] = i + 10;
    return acc
}, {})

let result = 0;

for (let i = 0; i < N.length; i++ ) {
    let n = parseInt(N[i]);
    const digit = N.length - 1 - i
    if (isNaN(n)) {
        n = num[N[i]];
    }
    
    result += (parseInt(B) ** digit) * n;
}

console.log(result)