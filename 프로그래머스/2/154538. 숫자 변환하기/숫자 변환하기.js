function solution(x, y, n) {
    let flag = false
    let answer = 0;
    const stack = [[x]]
    let temp = new Set();
    
    if (x === y) return 0
    
    while (stack.length > 0) {
        answer++

        const array = stack.pop()
        for (let i of array) {
            const plus = i + n
            const twice = i * 2
            const triple = i * 3
            if (plus === y || twice === y || triple === y) {
                flag = true
                break
            }
            
            if (plus < y) temp.add(plus)
            if (twice < y) temp.add(twice)
            if (triple < y) temp.add(triple)
        }
        
        if (flag) break
        if (temp.size === 0) break
        
        stack.push([...temp])
        temp.clear()
    }
    
    return flag ? answer : -1;
}