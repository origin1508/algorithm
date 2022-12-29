import sys
input = sys.stdin.readline

n = int(input())
list = list(map(int, input().rstrip().split()))
target = int(input())

start = 1
end = max(list)
result = 0

while start <= end:
  total = 0
  mid = (start + end) // 2

  for i in list:
    if mid >= i:
      total += i
    else:
      total += mid

  if total <= target:
    result = mid
    start = mid + 1
  else:
    end = mid - 1

print(result)