function solution(k, m, score) {
    var answer = []
    score.sort((a, b) => b - a);
    let idx = 0
    while (idx + m <= score.length) {
        answer.push(score.slice(idx, idx + m))
        idx += m
    }
    
    answer = answer.reduce((acc, cur) => acc += Math.min(...cur) * m, 0)
    
    return answer;
}