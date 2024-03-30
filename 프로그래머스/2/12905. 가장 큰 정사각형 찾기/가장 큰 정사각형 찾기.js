function solution(board)
{
    let answer = 1
    let flag = false
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 0) continue
            
            flag = true
            if (i > 0 && j > 0) {
                if (board[i][j - 1] && board[i - 1][j - 1] && board[i - 1][j]) {
                    board[i][j] = (Math.sqrt(Math.min(board[i][j - 1], board[i - 1][j - 1], board[i - 1][j])) + 1) ** 2
                    answer = Math.max(answer, board[i][j])
                }
            }
        }
    }

    return flag ? answer : 0
}