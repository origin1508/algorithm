function solution(k, ranges) {
    var answer = [];
    const result = [];
    
    while (k !== 1) {
        let prev = k
        
        if (k % 2 === 0) {
            k /= 2
        } else {
            k *= 3
            k++
        }
        
        result.push((prev + k) / 2)
    }
    
    const n = result.length
    
    
    for (let i = 0; i < ranges.length; i++) {
        const [a, b] = ranges[i]
        const start = a
        const end = n + b
        let area = -1

        if (start <= end) {
            area = result.slice(start, end).reduce((acc, cur) => acc += cur, 0)
        }
        
        answer.push(area)
    }
    
    return answer;
}