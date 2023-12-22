function solution(players, callings) {
    var answer = [];
    const playerList = players.reduce((acc, cur, idx) => {
        acc[cur] = idx
        return acc
    }, {})
    
    callings.forEach(call => {
        const curIdx = playerList[call]
        const nextIdx = curIdx - 1
        const nextPlayer = players[nextIdx]
        players[curIdx] = nextPlayer
        players[nextIdx] = call
        playerList[call]--
        playerList[nextPlayer]++
    })
    
    return players;
}