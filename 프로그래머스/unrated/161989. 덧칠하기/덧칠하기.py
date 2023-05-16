def solution(n, m, section):
    answer = 0
    brush = 0
    while section:
        wall = section.pop(0)
        if wall > brush:
            brush = wall + m - 1
            answer += 1
            
    return answer