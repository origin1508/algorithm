def solution(ingredient):
    answer = 0
    index = 0
    hambergers = []
    
    for i in ingredient:
        hambergers.append(i)
        if len(hambergers) >= 4:
            if hambergers[-4:] == [1, 2, 3, 1]:
                answer += 1
                for _ in range(4):
                    hambergers.pop()
    return answer