import sys
input = sys.stdin.readline

n, k = map(int, input().rstrip().split())
d = [0] * (k + 1)
item = []
for _ in range(n):
 item.append(list(map(int, input().rstrip().split()))) 


for w, v in item:
  for i in range(k, 0, -1):
    if w > i:
      break
    else:
      d[i] = max(d[i], v + d[i - w])

print(max(d))