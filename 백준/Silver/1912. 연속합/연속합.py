import sys
input = sys.stdin.readline

n = int(input())
array = list(map(int, input().rstrip().split()))
d = [0] * n

d[0] = array[0]
for i in range(1, n): 
  d[i] = max(d[i-1] + array[i], array[i])

print(max(d))