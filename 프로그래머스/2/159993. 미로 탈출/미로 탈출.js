function bfs(start, target, maps) {
    const move = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const distance = new Array(maps.length).fill(0).map(_ => new Array(maps[0].length).fill(1))
    const queue = [start]

    distance[start[0]][start[1]] = 0

    while (queue.length > 0) {
        const [x, y] = queue.shift()

        if (maps[x][y] === target) {
            return distance[x][y]
        }

        move.forEach(([dx, dy]) => {
            const nextX = x + dx
            const nextY = y + dy
            if (nextX >= 0 && nextX < maps.length && nextY >= 0 && nextY < maps[0].length) {
                if (distance[nextX][nextY] === 1 && maps[nextX][nextY] !== "X") {
                    distance[nextX][nextY] += distance[x][y]
                    queue.push([nextX, nextY])
                }
            }
        })
    }

    return 0
}

function solution(maps) {
    let answer = 0;
    const row = maps.length
    const col = maps[0].length

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (maps[i][j] === "S" || maps[i][j] === "L") {
                const target = maps[i][j] === "S" ? "L" : "E"
                const time = bfs([i, j], target, maps)
                if (time === 0) return -1
                answer += time
            }
        }
    }
    
    return answer;
}