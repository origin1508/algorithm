function solution(maps) {
    let answer = [];
    const m = maps.length;
    const n = maps[0].length;
    const visited = new Array(m).fill(0).map(_ => new Array(n).fill(false))
    
    const dfs = (start, visited) => {
        const move = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const stack = [start];
        let count = 0
        
        while(stack.length > 0) {
            const [x, y] = stack.pop()
            if (!visited[x][y]) {
                count += parseInt(maps[x][y])
                visited[x][y] = true
                
                for (let d of move) {
                    const nextX = x + d[0]
                    const nextY = y + d[1]
                    
                    if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && maps[nextX][nextY] !== "X" && !visited[nextX][nextY]) {
                        stack.push([nextX, nextY])
                    }
                }
            }
        }
        
        return count
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (maps[i][j] !== "X" && !visited[i][j]) {
                answer.push(dfs([i, j], visited))
            }
        }
    }
    
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}