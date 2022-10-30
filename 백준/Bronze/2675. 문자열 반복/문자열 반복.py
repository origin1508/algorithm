import sys
input = sys.stdin.readline

n = int(input())

for _ in range(n):
  r, s = input().split()
  for c in s:
    print(c * int(r), end="")
  print()