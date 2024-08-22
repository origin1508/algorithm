const line = require("node:fs")
            .readFileSync("/dev/stdin")
            .toString()
            .trim()
            .split("\n");

const scoreMap = {
    'A+':	4.5,
    'A0':	4.0,
    'B+':	3.5,
    'B0':	3.0,
    'C+':	2.5,
    'C0':	2.0,
    'D+':	1.5,
    'D0':	1.0,
    'F':	0.0
};
let totalCredit = 0;
let totalScore = 0;

line.forEach((it) => {
    const [, credit, score] = it.split(" ");
    if (score in scoreMap) {
        totalCredit += parseFloat(credit);
        totalScore += (scoreMap[score] * parseFloat(credit));        
    }
})

console.log(totalScore / totalCredit)
