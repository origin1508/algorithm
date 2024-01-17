function solution(k, dungeons) {
    let answer = -1;
    
    const DFS = (visited, k, count) => {
        for (let i = 0; i < dungeons.length; i++) {
            const nextVisited = [...visited]
            if (!nextVisited[i]) {
                nextVisited[i] = true
                const [required, consumed] = dungeons[i]
                let nextK = k
                if (k >= required) {
                    DFS(nextVisited, k - consumed, count + 1)
                }
                
            }
        }
        answer = Math.max(count, answer)
    }
    
    const visited = new Array(dungeons.length).fill(false)
    DFS(visited, k, 0)
    
    return answer;
}