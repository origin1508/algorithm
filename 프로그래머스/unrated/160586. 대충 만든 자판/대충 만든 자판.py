def solution(keymap, targets):
    answer = []
    count_map = {}
    for key in keymap:
        for i,k in enumerate(key):
            if k in count_map:
                if i + 1 < count_map[k]:
                    count_map[k] = i + 1
            else:
                count_map[k] = i + 1
                
    for target in targets:
        available = True 
        count = 0
        for t in target:
            if t in count_map:
                count += count_map[t]
            else:
                answer.append(-1)
                available = False
                break
        if available:
            answer.append(count)
        
        
    return answer