const N = parseInt(require("node:fs").readFileSync("/dev/stdin").toString().trim());

const arr = [1];

while(true) {
    if (arr.at(-1) >= N) {
        console.log(arr.length);
        break
    }
     
    arr.push(arr.at(-1) + (6 * arr.length));
}