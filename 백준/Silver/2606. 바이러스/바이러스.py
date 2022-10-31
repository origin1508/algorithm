import sys
input = sys.stdin.readline

n = int(input().strip())
m = int(input().strip())
graph = [[0] *( n+1 )for _ in range(n+1)]
visited = [False] * (n+1)
result = []

for _ in range(m):
  r, c = map(int, input().strip().split())
  graph[r][c] = 1
  graph[c][r] = 1

def dfs(v):
  visited[v] = True
  result.append(v)

  for i in range(n+1):
    if graph[v][i] == 1 and not visited[i]:
      dfs(i)

dfs(1)
print(len(result)-1)