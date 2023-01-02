import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
  n = int(input())
  note = {}
  for i in list(map(int, input().rstrip().split())):
    note[i] = 1
  m = int(input())
  for j in list(map(int, input().rstrip().split())):
    try:
      if note[j] == 1:
        print(1)
    except:
      print(0)