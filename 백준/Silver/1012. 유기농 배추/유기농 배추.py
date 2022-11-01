import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline
move = [[-1, 0], [1, 0], [0, -1], [0, 1]]
result = []

def dfs(r, c):
  graph[r][c] = 0

  for i in move:
    next_r = r + i[0]
    next_c = c + i[1]

    if 0 <= next_r < n and 0 <= next_c < m:
      if graph[next_r][next_c] == 1:
        dfs(next_r, next_c)

for _ in range(int(input())):
  m, n, k = map(int, input().strip().split())
  graph = [[0] * m for _ in range(n)]
  cnt = 0
  
  for _ in range(k):
    x, y = map(int, input().strip().split())
    graph[y][x] = 1
  

  for i in range(n):
    for j in range(m):
      if graph[i][j] == 1:
        dfs(i, j)
        cnt += 1
  result.append(cnt)
  
print("\n".join(str(i) for i in result))