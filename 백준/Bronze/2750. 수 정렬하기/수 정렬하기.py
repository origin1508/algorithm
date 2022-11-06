import heapq
import sys
input = sys.stdin.readline

h = []
for _ in range(int(input())):
  heapq.heappush(h, int(input().strip()))

while h:
  print(heapq.heappop(h))