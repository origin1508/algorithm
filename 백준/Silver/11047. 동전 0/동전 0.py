n, k = map(int, input().split())
coins = []
cnt = 0
for i in range(n):
  coins.insert(0, int(input()))

for coin in coins:
  cnt += k//coin
  k %= coin

  if k == 0:
    break

print(cnt)