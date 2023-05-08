def solution(babbling):
    array = [ "aya", "ye", "woo", "ma" ]
    answer = 0
    
    def can_read(str, prev):
        if len(str) == 0:
            return True
        else:
            if str[:3] in array and prev != str[:3]:
                return can_read(str[3:], str[:3])
            else:
                if str[:2] in array and prev != str[:2]:
                    return can_read(str[2:], str[:2])
                else:
                    return False
                
    for i in babbling:
        if i in array:
            answer += 1
        else:
            if can_read(i, ""):
                answer += 1

        
    return answer