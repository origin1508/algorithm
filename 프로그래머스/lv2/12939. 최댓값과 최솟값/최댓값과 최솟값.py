def solution(s):
    answer = []
    s = s.split(" ")
    answer.append(min(s, key=lambda x: int(x)))
    answer.append(max(s, key=lambda x: int(x)))
    return " ".join(answer)