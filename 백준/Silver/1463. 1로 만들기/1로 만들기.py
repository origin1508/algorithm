import sys
input = sys.stdin.readline

x = int(input())

d = [0] * 1000001

for i in range(2, x + 1):
  # 1을 뺏을 경우 1을 뺀 값의 횟수 +1한 값이 최솟값
  d[i] = d[i-1] + 1
  # 2로 나누어질 경우, 2로 나누어진 값의 최솟값의 +1한 값과 1을 뺐을 경우 최솟값중 작은 값
  if i % 2 == 0:
    d[i] = min(d[i], d[i // 2] + 1)
  if i % 3 == 0:
    d[i] = min(d[i], d[i // 3] + 1)

print(d[x])
