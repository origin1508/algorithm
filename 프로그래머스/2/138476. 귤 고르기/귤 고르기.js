function solution(k, tangerine) {
    let answer = 0;
    let total = 0;
    const tangerineMap = new Array(Math.max(...tangerine)).fill(0)
    tangerine.forEach(el => tangerineMap[el - 1]++)
    tangerineMap.sort((a, b) => b - a)
    
    for (let i = 0; i < tangerineMap.length; i++) {
        total += tangerineMap[i]
        answer++
        
        if (total >= k) break
    }
    
    return answer;
}