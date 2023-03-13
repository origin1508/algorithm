def solution(n):
    prime = [True] * (n + 1)
    
    prime[0] = False
    prime[1] = False
    
    for i in range(2, n + 1):
        if i == 2:
            continue
        
        for j in range(2, int(i ** 0.5) + 1):
            if i % j == 0:
                prime[i] = False
                break
    

    return prime.count(True)