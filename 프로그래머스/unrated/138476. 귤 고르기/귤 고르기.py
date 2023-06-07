def solution(k, tangerine):
    tangerine_map = {}
    for t in tangerine:
        if t in tangerine_map:
            tangerine_map[t] += 1
        else:
            tangerine_map[t] = 1
    
    answer = 0
    
    for cnt in sorted(tangerine_map.values(), reverse = True):
        k -= cnt
        answer += 1
        
        if k <= 0:
            break
            
    return answer