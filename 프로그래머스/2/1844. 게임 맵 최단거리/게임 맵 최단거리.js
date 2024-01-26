function solution(maps) {
    const move = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const X = maps.length
    const Y = maps[0].length
    const BFS = (x, y) => {
        const stack = [[x, y]]
        
        while (stack.length > 0) {
            const current = stack.shift()
            for (let i = 0; i < move.length; i++) {
                const nextX = current[0] + move[i][0]
                const nextY = current[1] + move[i][1]
                
                if (nextX >= 0 && nextY >= 0 && nextX < X && nextY < Y && maps[nextX][nextY] === 1) {
                    maps[nextX][nextY] += maps[current[0]][current[1]]
                    stack.push([nextX, nextY])
                }
            }
        }
        return maps[X - 1][Y - 1] === 1 ? -1 : maps[X - 1][Y - 1]
    }
    
    
    return BFS(0, 0)
}