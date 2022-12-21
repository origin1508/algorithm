from collections import deque
def solution(maps):
    n = len(maps)
    m = len(maps[0])
    move = [[-1,0], [1,0], [0,-1],[0,1]]
    
    def bfs(x, y):
        que = deque()
        que.append((x, y))
        while que:
            x, y = que.popleft()
            for d_x, d_y in move:
                next_x = x + d_x
                next_y = y + d_y
                if 0 <= next_x < n and 0 <= next_y < m and maps[next_x][next_y] == 1:
                    maps[next_x][next_y] += maps[x][y]
                    que.append((next_x, next_y))
        return -1 if maps[n-1][m-1] == 1 else maps[n-1][m-1]
    answer = bfs(0, 0)
    
    return answer