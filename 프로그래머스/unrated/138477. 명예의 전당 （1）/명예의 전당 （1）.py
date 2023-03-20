def solution(k, score):
    answer = []
    HOF = []
    for s in score:
        HOF.append(s)
        if len(HOF) < k:
            answer.append(min(HOF))
        else:
            HOF.sort(reverse=True)
            answer.append(min(HOF[:k]))
            
    return answer