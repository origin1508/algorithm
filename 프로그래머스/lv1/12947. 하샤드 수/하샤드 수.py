def solution(x):
    answer = False
    number = [int(i) for i in str(x)]
    if x % sum(number) == 0:
        answer = True
        
    return answer