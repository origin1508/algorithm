function solution(N, road, K) {
    const dijkstra = new Array(N + 1).fill(Infinity)
    const visited = new Array(N + 1).fill(false)
    const graph = new Array(N + 1).fill(0).map(_ => new Object())
    road.forEach((el) => {
        const [s, e, c] = el
        let cost = c
        if (graph[s][e]) {
            cost = Math.min(graph[s][e], cost)
        }
        graph[s][e] = cost
        graph[e][s] = cost
    })
    const stack = [1]
    dijkstra[1] = 0

    while (stack.length > 0) {
        const node = stack.pop()
        Object.entries(graph[node]).forEach(([next, cost]) => {
            const acc = dijkstra[node] + cost
            if (dijkstra[next] > acc) {
                stack.push(next)
                dijkstra[next] = acc
            }
            
        })
    }
    
   const answer = dijkstra.filter(el => el <= K).length
    
    return answer
}