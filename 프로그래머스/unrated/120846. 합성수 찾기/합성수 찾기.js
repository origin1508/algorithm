function solution(n) {
    var answer = 0;
    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i ++) {
            if (num % i === 0) return false
        }
        return true
    }
    
    for (let i = 4; i <= n; i++) {
        !isPrime(i) && answer++
    }
    return answer;
}