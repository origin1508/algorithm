const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
const star = "*"

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 1; i <= Number(input[0]); i++) {
        console.log(star.repeat(i))
    }
});