def solution(nums):
    map = {}
    length = len(nums)
    answer = 0
    
    for i in nums:
        if i in map:
            map[i] += 1
        else:
            map[i] = 1
    
    if length/2 < len(map):
        answer = length//2
    else:
        answer = len(map)
    
    return answer