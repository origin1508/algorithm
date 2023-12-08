function divisorCounter(num) {
    let result = new Set()
    if (num === 1) return 1
    
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) result.add(i).add(num / i)
    }
    
    return result.size
} 
function solution(number, limit, power) {
    var answer = 0;
    for (let i = 1; i <= number; i++) {
        const count = divisorCounter(i)
        answer += count > limit ? power : count
    }
    return answer;
}