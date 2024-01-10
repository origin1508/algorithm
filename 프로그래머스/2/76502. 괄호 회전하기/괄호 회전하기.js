function solution(s) {
    let answer = 0
    
    const isCorrect = (s) => {
        const bracketSet = {
            ")": "(", "]": "[", "}": "{"
        }
        const stack = []
        for (let i = 0; i < s.length; i++) {
            const item = s[i]
            if (item === ")" || item === "]" || item === "}") {
                if (stack.at(-1) === bracketSet[item]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(item)
            }
        }
        return stack.length === 0 ? true : false
    } 
    const s2 = s + s
    
    for (let i = 0; i < s.length; i++) {
        const str = s2.slice(i, i + s.length)
        if (isCorrect(str)) answer++
    }
    
    return answer;
}