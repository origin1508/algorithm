function solution(n, lost, reserve) {
    var answer = 0;
    const lostSet = new Set(lost)
    const reserveSet = new Set(reserve)
    
    const realLostSet = new Set([...lostSet].filter(el => {
        if (reserveSet.has(el)) {
            reserveSet.delete(el)
            return false
        }
        return true
    }))
    
    for (let i of [...reserveSet].sort((a, b) => a - b)) {
        if (realLostSet.has(i - 1)) {
            realLostSet.delete(i - 1)
            continue
        }
        if (realLostSet.has(i + 1)) {
            realLostSet.delete(i + 1)
            continue
        }
    }
    answer = n - realLostSet.size
    return answer
}