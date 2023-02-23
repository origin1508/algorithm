def solution(a, b):
    answer = 0
    temp = [i for i in range(min(a, b), max(a, b) + 1)]
    answer = sum(temp)
    
    return answer