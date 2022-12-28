import sys
input = sys.stdin.readline

n = int(input())
cards = list(map(int, input().rstrip().split()))
cards.sort()
m = int(input())
numbers = list(map(int, input().rstrip().split()))

def binary_search(array, start, end, target):
  if start > end:
    return 0
  mid = (start + end) // 2
  if array[mid] == target:
    return array[start:end+1].count(target)
  elif array[mid] < target:
    start = mid + 1
    return binary_search(array, start, end, target)
  else:
    end = mid - 1
    return binary_search(array, start, end, target)

result = {}
for number in numbers:
  if number not in result:
    result[number] = binary_search(cards, 0, n-1, number)
    
print(' '.join(str(result[x]) if x in result else '0' for x in numbers ))