import math
def solution(n):
    answer = 1
    for i in range(math.ceil(n/2), 0, -1):
        sum = i
        if sum == n:
            break
            
        while sum < n:
            i -= 1
            if i == 0:
                break
            sum += i
        
        if sum == n:
            answer += 1
            
    return answer