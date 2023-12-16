function solution(board, moves) {
    var answer = 0;
    const basket = [];
    const n = board.length
    const boardArr = new Array(n + 1).fill(0).map(_ => []);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] !== 0) boardArr[j + 1].push(board[i][j])
        }
    }
    
    moves.forEach(move => {
        if (basket.length === 0) {
            basket.push(boardArr[move].shift())
        } else {
            const newDoll = boardArr[move].shift()
            const prevDoll = basket.at(-1)
            if (newDoll) {
                if (newDoll === prevDoll) {
                basket.pop()
                answer += 2
                } else {
                basket.push(newDoll)
            }
            }
            
        }

    })
    return answer;
}