def solution(k, tangerine):
    tangerine_map = {}
    for t in tangerine:
        if t in tangerine_map:
            tangerine_map[t] += 1
        else:
            tangerine_map[t] = 1
    
    sorted_tangerine_map = sorted(tangerine_map.items(), key = lambda x: x[1], reverse = True)
    answer = 0
    
    for size, cnt in sorted_tangerine_map:
        k -= cnt
        answer += 1
        
        if k <= 0:
            break
            
    return answer