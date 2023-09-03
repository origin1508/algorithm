def solution(n, left, right):
    answer = []
    for i in range(left, right + 1):
        remainder = i % n
        quotient = i // n
        elem = 1 + max(remainder, quotient)
        answer.append(elem)
        


    return answer