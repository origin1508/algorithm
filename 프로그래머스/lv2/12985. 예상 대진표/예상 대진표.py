import math
def solution(n,a,b):
    answer = 0

    while True:
        answer += 1
        a = math.ceil(a / 2)
        b = math.ceil(b / 2)
        if a == b:
            break

    return answer