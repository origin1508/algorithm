def solution(s):
    answer = [0, 0]
    
    while s != "1":
        n = len(s) - s.count("0")
        answer[1] = answer[1] + s.count("0")
        answer[0] = answer[0] + 1
        new_s = ""
        while n > 0:
            new_s += str(n % 2)
            n = n // 2
                
        s = new_s
        
    return answer