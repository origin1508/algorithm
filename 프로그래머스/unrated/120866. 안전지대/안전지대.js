function solution(board) {
    const checkDangerZone = (x, y) => {
        const check = [[1, 0], [-1, 0], [0, 1], [0, -1], [-1, -1], [1, -1], [-1, 1], [1, 1]];
        for (let i = 0; i < check.length; i++) {
            const nextX = x + check[i][0]
            const nextY = y + check[i][1]
            if (board[nextX]?.[nextY] === 0) board[nextX][nextY] = 2
        }
    }
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[0].length; y++) {
            if (board[x][y] === 1) checkDangerZone(x, y)
        }
    }
    var answer = board.reduce((acc, cur) => acc += cur.filter(el => el === 0).length,0)
    return answer;
}