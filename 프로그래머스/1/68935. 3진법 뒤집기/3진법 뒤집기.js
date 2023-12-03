function solution(n) {
    let trigit = ""
    var answer = 0
    while (true) {
        if (n === 0) break
        
        trigit += n % 3
        n = Math.floor(n / 3)
    }
    
    [...trigit].reverse().forEach((el, i) => {
        const number = Number(el)
        if (number !== 0) {
            const base = (3 ** i)
            answer += base * number
        }
    })
    return answer;
}