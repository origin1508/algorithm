import sys

input = sys.stdin.readline

k, n = map(int, input().rstrip().split())
cable = [int(input().rstrip()) for _ in range(k)]
end = max(cable)
start = 1
result = 0

while start <= end:
    total = 0
    mid = (start + end) // 2

    for i in cable:
        total += i // mid

    if total < n:
        end = mid - 1
    elif total >= n:
        result = mid
        start = mid + 1

print(result)