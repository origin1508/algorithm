function solution(players, callings) {
    var answer = [];
    let first = null
    let prev = null
    const playerList = {}
    players.forEach((player) => {
        playerList[player] = {
            prev: prev,
            next: null
        }
        if (prev === null) first = player
        else {
            playerList[prev].next = player
        }
        prev = player
    })

    const swap = (call) => {
        const prev = playerList[call].prev
        const next = playerList[call].next
        const prevPrev = playerList[prev].prev

        if (prevPrev === null) {
            first = call
        } else {
            playerList[prevPrev].next = call
        }

        if (next !== null) {
            playerList[next].prev = prev
        }

        playerList[call].prev = prevPrev
        playerList[call].next = prev
        playerList[prev].prev = call
        playerList[prev].next = next

    }

    callings.forEach(call => swap(call))

    while(true) {
        answer.push(first)
        first = playerList[first].next
        if (first === null) break
    }

    return answer;
}