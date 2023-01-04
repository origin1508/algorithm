import sys
input = sys.stdin.readline

n = int(input())
array = [list(map(int, input().rstrip().split())) for _ in range(n)]

for i in range(1, n):
  array[i][0] = min(array[i-1][1], array[i-1][2]) + array[i][0]
  array[i][1] = min(array[i-1][0], array[i-1][2]) + array[i][1]
  array[i][2] = min(array[i-1][0], array[i-1][1]) + array[i][2]

print(min(array[n-1]))