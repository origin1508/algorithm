const N = parseInt(require("node:fs").readFileSync("/dev/stdin").toString());

const blank = " "
const star = "*"
let blankCnt = N - 1;
let starCnt = 1;

for (let i = 0; i < (2 * N) - 1; i++) {
    const output = blank.repeat(blankCnt) + star.repeat(starCnt);
    console.log(output)
    if (i < N - 1) {
        blankCnt--;
        starCnt += 2;
    } else {
        blankCnt++
        starCnt -= 2;
    }
}