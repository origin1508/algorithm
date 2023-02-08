def solution(nums):
    map = []
    length = len(nums)
    answer = 0
    
    for i in nums:
        if i in map:
            continue
        else:
            map.append(i)
    
    if length/2 < len(map):
        answer = length//2
    else:
        answer = len(map)
    
    return answer