const N = require("node:fs")
            .readFileSync("/dev/stdin")
            .toString();


const long = new Array(N / 4).fill("long").join(" ")

console.log(long, "int")
          
            