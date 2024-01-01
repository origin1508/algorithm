function solution(brown, yellow) {
    var answer = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(yellow)); i++) {
        if (yellow % i === 0) {
            const col = i + 2
            const row = yellow / i + 2
            
            if (col * row === brown + yellow) answer = [row, col]
        }
    }
    return answer;
}