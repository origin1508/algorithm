const X = parseInt(require("node:fs").readFileSync("/dev/stdin").toString().trim());

let numerator = 1;
let denominator = 1;
let direction = "r";

for (let i = 1; i < X; i++) {
    switch(direction) {
        case "r":
            denominator++;
            direction = "bl";
            break;
        case "bl":
            numerator++;
            denominator--;
            direction = denominator === 1 ? "d" : direction;
            break;
        case "d":
            numerator++;
            direction = "tr";
            break;
        case "tr":
            numerator--;
            denominator++;
            direction = numerator === 1 ? "r" : direction;
            break;
        default:
            break;
    }
}

console.log(`${numerator}/${denominator}`)