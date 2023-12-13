function solution(X, Y) {
    var answer = '';
    const x = new Array(10).fill(0)
    const y = new Array(10).fill(0)

    for (let i = 0; i < X.length; i++) {
        const index = Number(X[i])
        x[index] += 1
    }
    
    for (let i = 0; i < Y.length; i++) {
        const index = Number(Y[i])
        y[index] += 1
    }
    
    for (let i = 0; i < 10; i++) {
        const xCount = x[i]
        const yCount = y[i]
        if (xCount >= 1 && yCount >= 1) {
            answer = i.toString().repeat(Math.min(xCount, yCount)) + answer
        }
    }
    
    if (answer.length === 0) answer = "-1"
    else if (Number(answer) === 0) answer = "0"
    
    return answer;
}