def solution(nums):
    answer = 0
    sums = []
    
    for i in range(len(nums)-2):
        for j in range(i+1, len(nums)-1):
            for k in range(j+1, len(nums)):
                sums.append(nums[i] + nums[j] + nums[k])
    
    for i in sums:
        for j in range(2, int(i ** 0.5) + 1):
            if i % j == 0:
                check = False
                break
        else:
            answer += 1
    
    return answer