import sys

input = sys.stdin.readline

n = int(input())
graph = []
move = [[-1, 0], [1, 0], [0, -1], [0, 1]]
ans = []
number = 0

for _ in range(n):
    graph.append([int(i) for i in (input().strip())])

def dfs(x, y, initial):
  global cnt
  cnt = initial
  graph[x][y] = 0
  
  for i in move:
    next_x = x + i[0]
    next_y = y + i[1]
    if 0 <= next_x < n and 0 <= next_y < n and graph[next_x][next_y] == 1:
      cnt += 1
      dfs(next_x, next_y, cnt)

for x in range(n):
    for y in range(n):
        if graph[x][y] == 1:
          dfs(x, y, 1)
          number += 1
          ans.append(cnt)
          
print(number)
print("\n".join(str(i) for i in sorted(ans)))