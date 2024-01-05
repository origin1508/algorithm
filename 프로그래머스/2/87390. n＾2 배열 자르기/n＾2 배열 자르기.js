function solution(n, left, right) {
    var answer = [];
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n) + 1
        const col = i % n + 1
        answer.push(Math.max(row, col))
    }
    return answer
}