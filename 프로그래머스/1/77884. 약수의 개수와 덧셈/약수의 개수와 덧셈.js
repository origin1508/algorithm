function solution(left, right) {
    var answer = 0;
    const divisorCounter = (num) => {
        let count = 0
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                if (i === Math.sqrt(num)) count++
                else count += 2
            }
        }
        return count
    }
    
    for (let i = left; i <= right; i++) {
        if (divisorCounter(i) % 2 === 0) answer += i
        else answer -= i
    }
    return answer;
}