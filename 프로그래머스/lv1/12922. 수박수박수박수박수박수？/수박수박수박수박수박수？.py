def solution(n):
    s_1 = "수"
    s_2 = "박"
    answer = ""
    for i in range(n):
        if i % 2 == 1:
            answer += s_2
        else:
            answer += s_1
    return answer