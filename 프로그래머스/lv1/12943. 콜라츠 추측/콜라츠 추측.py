def solution(num):
    answer = 0
    while True:
        if num == 1:
            break
        
        if num % 2 == 0:
            num = num / 2
        else:
            num = num * 3 + 1
        
        answer += 1
        if answer == 501:
            answer = -1
            break
    return answer