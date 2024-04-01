function solution(board) {
    let answer
    const row = board.length
    const col = board[0].length
    const visit = new Array(row).fill(0).map(_ => new Array(col).fill(false))
    
    function move (x, y, dx, dy) {
        let nx = x
        let ny = y
        while (true) {
            if (nx + dx < 0 || nx + dx >= board.length || ny + dy < 0 || ny + dy >= board[0].length || board[nx + dx][ny + dy] === "D") {
                break
            }
            nx += dx
            ny += dy
        }
        
        return [nx, ny]
    }
    
    function bfs (start) {
        let result = -1
        const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const queue = [[...start, 0]]
        
        while (queue.length > 0) {
            const [x, y, count] = queue.shift();
            visit[x][y] = true;
            
            for (let d of direction) {
                const [nx, ny] = move(x, y, d[0], d[1])
                if (!visit[nx][ny]) {
                    queue.push([nx, ny, count + 1])
                    if (board[nx][ny] === "G") {
                        return count + 1
                    }
                }
            }
        }
        
        return -1
    }
    
    
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === "R") {
                answer = bfs([i, j])
                break
            }
        }
    }

    return answer;
}