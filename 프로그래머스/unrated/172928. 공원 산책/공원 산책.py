def solution(park, routes):
    move = {"E": [0, 1], "W": [0, -1], "S": [1, 0], "N": [-1, 0] }
    max_h = len(park)
    max_w = len(park[0])
    s = []
    
    for h in range(max_h):
        flag = False
        for w in range(max_w):
            if park[h][w] == "S":
                s = [h, w]
                flag = True
                break
        if flag:
            break
    
    for route in routes:
        route = route.split(" ")
        n = int(route[1])
        dh, dw = move[route[0]]
        flag = False
        
        next_h = s[0] + dh * n
        next_w = s[1] + dw * n
        
        if 0 <= next_h < max_h and 0 <= next_w < max_w:
            if s[0] == next_h:
                start = s[1] if s[1] < next_w else next_w
                end = next_w + 1 if s[1] < next_w else s[1] + 1
                for w in range(start, end):
                    if park[s[0]][w] == "X":
                        flag = True
                        break
                        
            if s[1] == next_w:
                start = s[0] if s[0] < next_h else next_h
                end = next_h + 1 if s[0] < next_h else s[0] + 1
                for h in range(start, end):
                    if park[h][s[1]] == "X":
                        flag = True
                        break
            
            if not flag:
                s = [next_h, next_w]
            
    return s