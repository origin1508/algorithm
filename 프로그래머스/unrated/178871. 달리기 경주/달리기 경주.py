def solution(players, callings):
    rank = {}
    for i in range(len(players)):
        rank[players[i]] = i
        
    for call in callings:
        now = rank[call]
        rank[call] -= 1
        rank[players[now - 1]] += 1
        players[now], players[now - 1] = players[now - 1], players[now]
    return players