def solution(food):
    answer = ""
    for i in range(1, len(food)):
        answer += "{}".format(i) * (food[i] // 2)
        

    return answer + "0" + answer[::-1]