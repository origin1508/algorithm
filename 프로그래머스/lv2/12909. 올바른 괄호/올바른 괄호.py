def solution(s):
    answer = True
    open = 0
    
    for i in s:
        if i == "(":
            open += 1
        elif i == ")":
            if open == 0:
                answer = False
                break
            else:
                open -= 1

    if open > 0:
        answer = False
        
    return answer