function divisorCounter(num) {
    let result = new Set()
    if (num === 1) return 1
    
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) result.add(i).add(num / i)
    }
    
    return result.size
} 
function solution(number, limit, power) {
    var answer = new Array(number).fill(0).map((_, i) => divisorCounter(i + 1)).reduce((acc, cur) => cur > limit ? acc += power : acc += cur,0)
    return answer;
}