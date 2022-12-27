import sys
input = sys.stdin.readline

n = int(input().rstrip())
array = list(map(int, input().rstrip().split()))
array.sort()

m = int(input().rstrip())
x = list(map(int, input().rstrip().split()))

def binary_search():
    start = 0
    end = n - 1
    while start <= end:
        mid = (start + end) // 2
        
        if array[mid] == i:
            return 1
        elif array[mid] < i:
            start = mid + 1
        else:
            end = mid - 1
        
    return 0

for i in x:
    print(binary_search())