const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let [hour, minute] = input;

minute -= 45;
if (minute < 0) {
    hour--
    minute += 60
}

if (hour < 0) hour += 24

console.log(hour, minute)