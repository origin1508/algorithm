import sys
input = sys.stdin.readline

print("".join([str(i) for i in sorted(list(input().strip()), reverse=True)]))