def solution(board, moves):
    basket = []
    answer = 0
    for move in moves:
        doll = 0
        for row in board:
            if row[move-1] != 0:
                doll = row[move-1]
                row[move-1] = 0
                break
        if doll == 0:
            break
            
        if len(basket) == 0:
            basket.append(doll)
        else:
            if basket[-1] == doll:
                basket.pop()
                answer += 2
            else:
                basket.append(doll)
                
    return answer