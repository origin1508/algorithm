function solution(land) {
    const answer = new Array(land.length).fill(null).map((_, i) => [...land[i]])
    for (let row = 1; row < land.length; row++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i !== j) {
                    answer[row][i] = Math.max(answer[row][i], land[row][i] + answer[row - 1][j])
                }
            }
        }
    }

    return Math.max(...answer.at(-1));
}