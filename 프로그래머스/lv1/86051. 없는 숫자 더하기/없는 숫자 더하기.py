def solution(numbers):
    answer = sum([i for i in range(10)])
    for i in numbers:
        answer -= i
    return answer