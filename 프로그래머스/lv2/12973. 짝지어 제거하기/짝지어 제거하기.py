def solution(s):
    answer = -1
    queue = []
    
    for i in s:
        if not queue:
            queue.append(i)
        else:
            if queue[-1] == i:
                queue.pop()
            else:
                queue.append(i)
    

    return 1 if not queue else 0