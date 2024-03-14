function solution(weights) {
    let answer = 0;
    const seesaw = {}
    const weightsMap = weights.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc
    }, {})
    

    for (let w of Object.keys(weightsMap)) {
        answer += (weightsMap[w] - 1) * weightsMap[w] / 2
        for (let k = 2; k < 5; k++) {
            const torque = parseInt(w) * k
            if (seesaw[torque]) {
                answer += seesaw[torque] * weightsMap[w]
                seesaw[torque] += weightsMap[w]
            } else {
                seesaw[torque] = weightsMap[w]
            }
        }
    }
    
    return answer;
}
