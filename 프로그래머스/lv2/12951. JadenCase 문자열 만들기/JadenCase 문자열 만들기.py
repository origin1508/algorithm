def solution(s):
    s = s.lower()
    answer = ""
    flag = True
    for i in s:
        if flag:
            i = i.upper()
            flag = False
        
        if i ==  " ":
            flag = True
        
        answer += i
        
    return answer