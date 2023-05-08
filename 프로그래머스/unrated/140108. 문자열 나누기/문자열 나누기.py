def solution(s):
    split = []
    answer = 0
    str = ""
    for i in s:
        str += i
        if len(str) == 2 * str.count(str[0]):
            split.append(str)
            str = ""
    
    if len(str) > 0:
        split.append(str)
        
    answer = len(split)
    return answer