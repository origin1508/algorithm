function solution(n) {
    const isPrime = (num) => {
        if (num == 2 || num === 3) return true
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false
        }
        return true
    }
    var answer = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i) && n % i === 0) answer.push(i) 
    }
    return answer;
}