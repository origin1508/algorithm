function solution(a, b, n) {
    var answer = 0;
    while(n >= a) {
        const newCoke = Math.floor(n / a) * b
        const empty = newCoke + n % a
        n = empty
        answer += newCoke
    }
    return answer;
}