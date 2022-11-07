import sys
input = sys.stdin.readline

number = sorted([int(i) for i in input().strip()], reverse=True)
print("".join([str(i) for i in number]))