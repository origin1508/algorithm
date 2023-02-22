def solution(n):
    answer = 0
    r = n ** (1/2)
    if r == int(r):
        answer = (r + 1) ** 2
    else:
        answer = -1
    return answer