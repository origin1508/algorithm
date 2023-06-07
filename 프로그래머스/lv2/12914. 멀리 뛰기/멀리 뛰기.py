def solution(n):
    k = 1234567
    answer = [0] * (n)
    
    for i in range(n):
        if i == 0:
            answer[i] = 1
        elif i == 1:
            answer[i] = 2
        else:
            answer[i] = answer[i-1] + answer[i-2]
            
        
    
    return answer[n - 1] % k