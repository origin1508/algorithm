function solution(n) {
    let answer = 0
    for (let i = 1; i <= Math.sqrt(n) ; i++) {
        if (n % i === 0) {
            answer += i
            if (i !== Math.sqrt(n)) {
            answer += n / i
                
            }
        }
    }
    return answer;
}