x = input()
count = 0
while len(x) > 1:
  temp = 0
  for i in x:
    temp += int(i)
    x = str(temp)
  count += 1

print(count)
print("YES" if int(x) % 3 == 0 else "NO")