import sys
input = sys.stdin.readline
n = int(input())
list = []

for _ in range(n):
  x, y = map(int,input().split())
  list.append([x, y])

list = sorted(list, key=lambda x: (x[1], x[0]))

endTime = 0
cnt = 0

for s, e in list:
  if s >= endTime:
    cnt += 1
    endTime = e
  
print(cnt)