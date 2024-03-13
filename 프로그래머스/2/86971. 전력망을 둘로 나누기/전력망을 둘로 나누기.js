function solution(n, wires) {
    let answer = Infinity;
    const graph = new Array(n + 1).fill(0).map(_ => new Array())
    wires.forEach(el => {
        graph[el[0]].push(el[1])
        graph[el[1]].push(el[0])
    })
    
    const dfs = (start, visited) => {
        let count = 0
        const stack = [start]
        
        while (stack.length > 0) {
            const cur = stack.pop()
            visited[cur] = true
            count++
            
            graph[cur].forEach(el => {
                if (!visited[el]) {
                    stack.push(el)
                }
            })
        }
        
        return count
    }
    
    for (let i = 0; i < wires.length; i++) {
        const start = wires[i]
        const visited = new Array(n + 1).fill(false)
        visited[start[1]] = true
        const count = dfs(start[0], visited)
 
        if (answer > Math.abs(2* count -  n)) {
            answer = Math.abs(2* count -  n)
        }
    }
    
    return answer;
}