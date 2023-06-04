def solution(brown, yellow):
    answer = []

    
    for i in range(int(yellow ** 1/2) + 1, 0, -1):
        if yellow % i == 0 and (i + 2) * (yellow / i + 2) - yellow == brown:
            answer = [i+2, yellow / i + 2]
            break

        
    return answer