def solution(s):
    map = {}
    answer = []
    for i in range(len(s)):
        x = s[i]
        if x in map:
            answer.append(i - map[x])
            map[x] = i
        else:
            map[x] = i
            answer.append(-1)
            
    return answer