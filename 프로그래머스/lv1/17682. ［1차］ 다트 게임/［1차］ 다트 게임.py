def solution(dartResult):
    answer = []
    point = 0
    
    for dart in dartResult:
        try:
            now = int(dart)
            if now == 0:
                if point * 10 == 10:
                    point = 10
                    continue
            answer.append(point)
            point = now
        except:
            if dart == "S":
                continue
            if dart == "D":
                point *= point
            if dart == "T":
                point *= point ** 2
            if dart == "*":
                answer[-1] *= 2
                point *= 2
            if dart == "#":
                point *= -1
    answer.append(point)

    return sum(answer)