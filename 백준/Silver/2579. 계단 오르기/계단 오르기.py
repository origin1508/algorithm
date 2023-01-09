import sys
input = sys.stdin.readline

n = int(input())
stairs = [0]
for _ in range(n):
  stairs.append(int(input()))
d = []
d.append([0, 0])
d.append([stairs[1], stairs[1]])
for i in range(2, n+1):
  d.append([stairs[i] + d[i-1][1], stairs[i] + max(d[i-2][0], d[i-2][1])])

print(max(d[n]))