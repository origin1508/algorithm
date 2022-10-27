n = int(input())
new = -1
count = 0
prev = n

while n != new:
  tens = (prev % 10) * 10
  ones = ((prev // 10) + (prev % 10)) % 10
  new = tens + ones
  prev = new
  count += 1

print(count)