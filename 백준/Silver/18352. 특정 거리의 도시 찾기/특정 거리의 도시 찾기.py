import sys
from collections import deque
input = sys.stdin.readline

n, m, k, x = map(int, input().rstrip().split())

cities = [[] for _ in range(n+1)]
distance = [-1] * (n + 1)
distance[x] = 0

for _ in range(m):
  s, e = map(int, input().rstrip().split())
  cities[s].append(e)

queue = deque([x])

while queue:
  v = queue.popleft()
  for i in cities[v]:
    if distance[i] == -1:
      distance[i] = distance[v] + 1
      queue.append(i)

check = False
for i,j in enumerate(distance):
  if j == k:
    print(i)
    check = True

if check == False:
  print(-1)