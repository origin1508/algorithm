function solution(n) {
    const number = ["1", "2", "4"]
    var answer = '';
    
    while (n !== 0) {
        n -= 1
        answer = number[n % 3] + answer
        n = Math.floor(n / 3)
    }
    return answer;
}