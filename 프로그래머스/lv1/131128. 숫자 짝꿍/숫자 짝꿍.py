def solution(X, Y):
    answer = ''
    x_list = [0] * 10
    y_list = [0] * 10
    
    for i in X:
        x_list[int(i)] += 1
    
    for i in Y:
        y_list[int(i)] += 1
        
    for i in range(9, -1, -1):
        if x_list[i] >= 1 and y_list[i] >= 1:
            cnt = min(x_list[i], y_list[i])
            answer += str(i) * cnt
    if len(answer) == 0: return "-1"
    elif answer[0] == "0": return "0"
    

    return answer