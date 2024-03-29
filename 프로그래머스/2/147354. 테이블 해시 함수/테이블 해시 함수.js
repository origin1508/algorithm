function solution(data, col, row_begin, row_end) {
    const answer = [];
    data.sort((a, b) => {
        return a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]
    })
    
    for (let i = row_begin - 1; i < row_end; i++) {
        answer.push(data[i].reduce((acc, cur) => {
            return acc += cur % (i + 1)
        }, 0))
    }

    return answer.reduce((acc, cur) => acc ^= cur, 0)
}