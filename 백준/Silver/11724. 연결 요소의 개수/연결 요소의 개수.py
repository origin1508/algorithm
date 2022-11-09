import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

def dfs(s):
  visited[s] = True

  for i in graph[s]:
    if not visited[i]:
      dfs(i)

n, m = map(int, input().strip().split())

graph = [[] for _ in range(n+1)]
visited = [False] * (n+1)
cnt = 0

for i in range(m):
  i, j = map(int, input().strip().split())
  graph[i].append(j)
  graph[j].append(i)


for i in range(1,n+1):
  if not visited[i]:
    dfs(i)
    cnt += 1

print(cnt)
    