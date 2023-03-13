def solution(nums):
    set_nums = set(nums)
    
    if len(nums) / 2 < len(set_nums):
        answer = len(nums) / 2
    else:
        answer = len(set_nums)
    
    return answer