function solution(m, n, board) {
    let answer = 0;
    const search = [[0, 0], [0, 1], [1, 1], [1, 0]]
    const graph = board.map(el => [...el])
    while (true) {
        const container = new Set()
        
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const block = graph[i][j]
                if (block === 0) continue

                if (graph[i][j + 1] === block && graph[i + 1][j] === block && graph[i + 1][j + 1] === block) {
                    container.add([i, j])
                }
            }
        }
        if (container.size === 0) break
        
        container.forEach(el => {
            const x = Number(el[0])
            const y = Number(el[1])
            graph[x][y] = 0
            graph[x][y + 1] = 0
            graph[x + 1][y + 1] = 0
            graph[x + 1][y] = 0
        })
        
        for (let x = 1; x < m; x++) {
            for (let y = 0; y < n; y++) {
                if (graph[x][y] !== 0) continue
                
                for (let k = x; k > 0; k--) {
                    if (graph[k - 1][y] !== 0) {
                        [graph[k][y], graph[k - 1][y]] = [graph[k - 1][y], graph[k][y]]
                    }
                }
            }
        }
    }
    answer = graph.reduce((acc, cur) => {
        return acc + cur.filter(el => el === 0).length
    }, 0)
    
    return answer;
}