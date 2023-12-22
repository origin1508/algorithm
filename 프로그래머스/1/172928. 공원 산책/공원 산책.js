function solution(park, routes) {
    var answer = [];
    const move = {E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] }
    const w = park.length
    const h = park[0].length
    let position = [];
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            if (park[i][j] === "S") {
                position = [i, j]
                break
            }
        }
    }
    
    routes.forEach((it) => {
        const direction = it.split(" ")
        const number = Number(direction[1])
        const [dx, dy] = move[direction[0]]
        let flag = true
        for (let i = 1; i <= number; i++) {
            const nextX = position[0] + dx * i
            const nextY = position[1] + dy * i
            if (nextX < 0 || nextX >= w || nextY < 0 || nextY >= h || park[nextX][nextY] === "X") {
                flag = false
                break
            }     
        }
        if (flag) position = [position[0] + dx * number, position[1] + dy * number]
    })

    return position;
}