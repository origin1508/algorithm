function solution(score) {
    const avg = score.map((el) => el.reduce((acc, cur) => acc += cur, 0) / el.length)
    const sortedAvg = [...avg].sort((a, b) => b - a)
    var answer = avg.map((v) => sortedAvg.indexOf(v) + 1)
    return answer;
}