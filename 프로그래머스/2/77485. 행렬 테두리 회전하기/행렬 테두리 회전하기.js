function solution(rows, columns, queries) {
    var answer = [];
    const matrix = new Array(rows + 1).fill(0).map(_ => new Array())
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++)
            matrix[i][j] = (columns * (i - 1)) + j
    }
    
    queries.forEach(el => {
        const [x1, y1, x2, y2] = el
        let x = x1
        let y = y1 + 1
        let temp = matrix[x1][y1]
        let min = temp
        
        while (y <= y2) {
            [temp, matrix[x][y]] = [matrix[x][y], temp]
            min = Math.min(temp, min)
            y++
        }
        x++
        y--
        
        while (x <= x2) {
            [temp, matrix[x][y]] = [matrix[x][y], temp]
            min = Math.min(temp, min)
            x++
        }
        x--
        y--
        
        while (y >= y1) {
            [temp, matrix[x][y]] = [matrix[x][y], temp]
            min = Math.min(temp, min)
            y--
        }
        y++
        x--
        
        while (x >= x1) {
            [temp, matrix[x][y]] = [matrix[x][y], temp]
            min = Math.min(temp, min)
            x--
        }
        
        answer.push(min)
    })
    return answer;
}