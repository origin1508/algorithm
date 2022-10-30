import sys
input = sys.stdin.readline

n = int(input())
x = []

for _ in range(n):
  w, h = map(int, input().split())
  x.append((w, h))

for i in x:
  grade = 1
  for j in x:
    if j[0] > i[0]  and j[1] > i[1]:
      grade += 1
  print(grade, end=" ")