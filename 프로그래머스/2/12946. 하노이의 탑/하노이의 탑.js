function solution(n) {
    function getAnswer(n, start, target) {
        if (n === 1) return [[start, target]]
        
        return getAnswer(n-1, start, 6 - start - target).concat([[start, target]]).concat(getAnswer(n - 1, 6 - start - target, target))
    }
    
    return getAnswer(n, 1, 3)
}