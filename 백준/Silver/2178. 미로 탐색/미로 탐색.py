import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
# visited = [[False] * m for _ in range(n)]
move = [[-1, 0], [1, 0], [0, -1], [0, 1]]
maze = []

for _ in range(n):
  maze.append([i for i in map(int, input().strip())])

def bfs(r, c):
  que = deque([[r,c]])

  while que:
    r, c = que.popleft()
    for i in move:
      next_r = r + i[0]
      next_c = c + i[1]
      if next_r >= 0 and next_r < n and next_c >= 0 and next_c < m:
        if maze[next_r][next_c] == 1:
          maze[next_r][next_c] += maze[r][c]
          que.append([next_r, next_c])
          
for x in range(n):
  for y in range(m):
    if maze[x][y] == 1:
      bfs(x, y)

print(maze[n-1][m-1])