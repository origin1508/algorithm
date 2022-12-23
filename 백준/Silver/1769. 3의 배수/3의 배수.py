import sys

input = sys.stdin.readline

x = input().rstrip()
count = 0
while True:
  temp = 0
  y = int(x)
  if y < 10:
    break
  else:
    for i in x:
      temp += int(i)
      x = str(temp)
    count += 1

print(count)
print("YES" if y % 3 == 0 and y != 0 else "NO")