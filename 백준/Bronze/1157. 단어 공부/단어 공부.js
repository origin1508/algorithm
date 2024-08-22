const word = require("node:fs").readFileSync("/dev/stdin").toString().trim().toUpperCase();

let result = "?"
let maxCount = 0;
const wordMap = {}

word.split("").forEach(c => {
    if (c in wordMap) wordMap[c]++;
    else wordMap[c] = 1;
    
    if (maxCount < wordMap[c]) {
        maxCount = wordMap[c];
        result = c;
    } else if (maxCount === wordMap[c]) {
        result = "?"
    }
})

console.log(result)

