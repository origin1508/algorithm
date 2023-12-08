function solution(n) {
    var answer = new Array(n + 1).fill(1)
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (answer[i] === 1) {
            let j = 2
            while(i * j <= n) {
                answer[i * j] = 0
                j++
            }
        }
    }
    answer = answer.filter((el, i) => {
        if (i === 0 || i === 1) return false
        return el === 1 ? true : false
    })
    return answer.length;
}