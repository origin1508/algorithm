function getPermutation(arr, num) {
    if (num === 1) return arr.map(el => [el])
    const result = []
    
    arr.forEach((el, idx, self) => {
        const remain = [...self.slice(0, idx), ...self.slice(idx + 1)]
        const permutation = getPermutation(remain, num - 1).map(el => [self[idx], ...el])
        
        result.push(...permutation)
    })
    
    return result
}

function calc(a, b, op) {
    switch (op) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        default:
            return undefined
    }
}

function solution(expression) {
    let answer = 0;
    const expressionArr = []
    const operator = new Set()
    let temp = "";
    
    for (let i = 0; i < expression.length; i++) {
        if (Number(expression[i]) >= 0) {
            temp += expression[i]
        } else {
            expressionArr.push(Number(temp))
            expressionArr.push(expression[i])
            operator.add(expression[i])
            temp = ""
        }
        
        if (i === expression.length - 1) expressionArr.push(Number(temp))
    }
    
    const permutation = getPermutation([...operator], operator.size)
    
    for (let i = 0; i < permutation.length; i++) {
        const p = permutation[i]
        let arr = [...expressionArr]
        
        for (let j = 0; j < p.length; j++) {
            const op = p[j]
            let idx = 0
            
            while (idx < arr.length) {
                if (op === arr[idx]) {
                    const num = calc(arr[idx - 1], arr[idx + 1], op)
                    arr = [...arr.slice(0, idx - 1), num, ...arr.slice(idx + 2)]
                    idx--
                } else {
                    idx++
                }
            }
        }
        answer = Math.max(answer, Math.abs(arr[0]))
    }


    return answer;
}