def solution(n):
    answer = [i for i in str(n)]
    answer = sorted(answer, reverse=True)

    return int("".join(answer))