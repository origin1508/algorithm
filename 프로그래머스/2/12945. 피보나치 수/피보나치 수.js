function solution(n) {
    var answer = new Array(n + 1).fill(0)
    answer[0] = 0
    answer[1] = 1
    for (let i = 2; i <= n; i++) {
        answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567
    }
    return answer[n]
}