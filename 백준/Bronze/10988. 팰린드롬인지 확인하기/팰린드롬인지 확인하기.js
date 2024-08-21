const input = require("node:fs").readFileSync("/dev/stdin").toString().trim();

let result = 1;

if (input !== input.split("").reverse().join("")) result = 0;

console.log(result);