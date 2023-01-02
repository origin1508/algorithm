import sys
input = sys.stdin.readline

def binary_search(array, start, end, target):
    if start > end:
        return False
    else:
        mid = (start + end) // 2
        
        if array[mid] == target:
            return True
        elif array[mid] > target:
            return binary_search(array, start, mid - 1, target)
        else:
            return binary_search(array, mid + 1, end, target)


t = int(input())
for _ in range(t):
    n = int(input())
    note_n = list(map(int, input().rstrip().split()))
    note_n.sort()
    m = int(input())
    note_m = list(map(int, input().rstrip().split()))

    for target in note_m:
        result = binary_search(note_n, 0, n-1, target)
        if result:
            print(1)
        else:
            print(0)