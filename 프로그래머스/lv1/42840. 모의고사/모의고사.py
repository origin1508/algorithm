def solution(answers):
    answer = []
    first = [1,2,3,4,5] * 2000
    second = [2,1,2,3,2,4,2,5] * 1250
    third = [3,3,1,1,2,2,4,4,5,5] * 1000
    point = {1: 0, 2:0, 3:0}
    
    for i,a in enumerate(answers):
        if first[i] == a:
            point[1] += 1
            
        if second[i] == a:
            point[2] += 1
            
        if third[i] == a:
            point[3] += 1
            

    for k, v in point.items():
        if v == max(point.values()):
            answer.append(k)
        
    return answer