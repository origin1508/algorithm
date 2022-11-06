import sys
input = sys.stdin.readline

temp = [i for i in list(map(int, input().split()))]
temp.sort()
print(temp[1])