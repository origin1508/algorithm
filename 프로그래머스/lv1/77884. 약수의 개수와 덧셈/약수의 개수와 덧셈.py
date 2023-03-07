def solution(left, right):
    answer = 0
    
    def cal(number):
        cnt = 0
        for i in range(1, number + 1):
            if number % i == 0:
                cnt += 1
        return cnt
    
    for i in range(left, right + 1):
        if cal(i) % 2 == 0:
            answer += i
        else:
            answer -= i
    
    return answer