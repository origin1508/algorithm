function solution(k, score) {
    var answer = [];
    const HOF = []
    
    for (let i = 0; i < score.length; i++) {
        HOF.push(score[i])
        HOF.sort((a, b) => b - a)
        if (HOF.length === k + 1) HOF.pop()
        answer.push(HOF.at(-1))        
        
    }
    return answer;
}