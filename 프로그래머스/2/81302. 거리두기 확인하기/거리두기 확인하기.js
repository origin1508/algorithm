function solution(places) {
    const dx1 = [1, 0, -1, 0]
    const dy1 = [0, 1, 0, -1]
    const dx2 = [1, -1, 1, -1]
    const dy2 = [1, 1, -1, -1]

    const check = (place) => {
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                if (place[x][y] !== "P") continue
                
                for (let i = 0; i < 4; i++) {
                    const nextX = x + dx1[i]
                    const nextY = y + dy1[i]
                    if (nextX >= 0 && nextX < 5 && nextY >= 0 && nextY < 5 && place[nextX][nextY] === "P") {
                        return 0
                    }
                }
                
                for (let i = 0; i < 4; i++) {
                    const nextX = x + dx2[i]
                    const nextY = y + dy2[i]
                    if (nextX >= 0 && nextX < 5 && nextY >= 0 && nextY < 5 && place[nextX][nextY] === "P") {
                        if (place[x][nextY] !== "X" || place[nextX][y] !== "X") return 0
                    }
                }
                
                for (let i = 0; i < 4; i++) {
                    const nextX = x + 2 * dx1[i]
                    const nextY = y + 2 * dy1[i]
                    if (nextX >= 0 && nextX < 5 && nextY >= 0 && nextY < 5 && place[nextX][nextY] === "P") {
                        if (place[x + dx1[i]][y + dy1[i]] !== "X") return 0
                    }
                }
                
                
            }
        }
        return 1
    }
    
    const answer = places.map(place => check(place))
    return answer;
}