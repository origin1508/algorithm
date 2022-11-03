def solution(numbers, target):
    answer = 0
    length = len(numbers)
    def dfs(index, value):
        nonlocal answer
         
        if value == target and index == (length - 1):
            answer += 1
        
        next_index = index + 1
        if next_index < length:
            dfs(next_index, value + numbers[next_index])
            dfs(next_index, value - numbers[next_index])
            
    dfs(0, numbers[0])
    dfs(0, -numbers[0])
    return answer