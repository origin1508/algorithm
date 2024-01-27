function solution(dirs) {
    let answer = new Set();
    const move = {U: [1, 0], D: [-1, 0], R: [0, -1], L: [0, 1]}
    const n = 11
    let curX = Math.floor(n / 2)
    let curY = Math.floor(n / 2)
    for (let i = 0; i < dirs.length; i++) {
        const dir = move[dirs[i]]
        if (curX + dir[0] >= 0 && curX + dir[0] < n && curY + dir[1] >= 0 && curY + dir[1] < n) {
            const nextX = curX + dir[0]
            const nextY = curY + dir[1]
            answer.add(`${[nextX,nextY,curX,curY].toString()}`)
            answer.add(`${[curX,curY,nextX,nextY].toString()}`)
            curX = nextX
            curY = nextY
        }
    }
    return answer.size / 2
}