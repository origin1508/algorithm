function solution(N, stages) {
    var answer = [];
    const stageClear = new Map()
    const stageFail = new Map()
    
    for (let i = 1; i <= N; i++) {
        stageClear.set(i, 0)
        stageFail.set(i, 0)
    }
    
    for (let i = 0; i < stages.length; i++) {
        const stage = stages[i]
        stageFail.set(stage, stageFail.get(stage) + 1)
        for (let j = 1; j <= stage - 1; j++) {
            stageClear.set(j, stageClear.get(j) + 1)
        }
    }
    
    for (let i = 1; i <= N; i++) {
        const rate = stageFail.get(i) / stageClear.get(i)
        answer.push([i, rate])
    }
    
    answer = answer.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]).map(el => el[0])
    return answer
}