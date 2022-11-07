n = int(input())
p = sorted(list(map(int, input().split())))
ans = 0

for i in p:
    ans += i * n
    n -= 1
    
print(ans)