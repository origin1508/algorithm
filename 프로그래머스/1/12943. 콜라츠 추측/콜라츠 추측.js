const isEven = (num) => num % 2 === 0 ? true : false

function solution(num) {
    var answer = 0;
    for (let i = 0; i < 500; i++) {
        if (num === 1) break
        
        if (isEven(num)) {
            num /= 2
        } else {
            num *= 3
            num += 1
        }
        
        answer++
        
 
    }
    return num === 1 ? answer : -1;
}