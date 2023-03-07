def solution(n, m):
    answer = []
    
    for i in range(min(n, m), 0, -1):
        if n % i == 0 and m % i == 0:
            answer.append(i)
            answer.append((m * n) // i)
            break

    return answer