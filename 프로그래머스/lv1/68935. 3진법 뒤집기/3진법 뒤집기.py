def solution(n):
    result = ""
    answer = 0

    while n > 0:
        result += str(n % 3)
        n = n // 3

    for i, d in enumerate(result[::-1]):
        answer += (3 ** i) * int(d)
    
    return answer