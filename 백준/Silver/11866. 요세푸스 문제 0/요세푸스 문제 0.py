import sys
from collections import deque

input = sys.stdin.readline

n, k = map(int, input().split())

circle = deque([_ for _ in range(1, n + 1)])
move = 0
result = []

while len(circle) > 0:
    move += 1
    temp = circle.popleft()
    if move % k == 0:
        result.append(temp)
    else:
        circle.append(temp)

print(str(result).replace('[','<').replace(']','>'))