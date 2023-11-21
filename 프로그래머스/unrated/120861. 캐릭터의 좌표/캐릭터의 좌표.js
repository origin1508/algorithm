function solution(keyinput, board) {
    const move = {"up": [0, 1], "down": [0, -1], "left": [-1, 0], "right": [1, 0]}
    const answer = keyinput.reduce((acc, cur) => {
        const next = [acc[0] + move[cur][0], acc[1] + move[cur][1]]
        if (next[0] > Math.floor(board[0] / 2) || next[0] < -Math.floor(board[0] / 2)) next[0] = acc[0]
        if (next[1] > Math.floor(board[1] / 2) || next[1] < -Math.floor(board[1] / 2)) next[1] = acc[1]
        return next
    }, [0, 0])
    
    return answer;
}