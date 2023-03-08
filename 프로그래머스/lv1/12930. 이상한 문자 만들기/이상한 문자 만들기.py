def solution(s):
    answer = ""
    s = list(s.lower())
    index = 0
    
    for i in range(len(s)):
        if ord(s[i]) == 32:
            index = 0
            continue
        else:
            if (index % 2 == 0):
                s[i] = s[i].upper()
        index += 1
                
    
    answer = "".join(s)
            
    return answer