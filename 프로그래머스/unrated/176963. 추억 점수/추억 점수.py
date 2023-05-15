def solution(name, yearning, photo):
    answer = []
    point = {}
    for n, y in zip(name, yearning):
        point[n] = y
    
    for p in photo:
        result = 0
        for people in p:
            if people in point:
                result += point[people]
        answer.append(result)
    return answer