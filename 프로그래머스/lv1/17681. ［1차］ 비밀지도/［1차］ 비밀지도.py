def solution(n, arr1, arr2):
    answer = []
    def decode(number):
        result = [0 for _ in range(n)]
        index = -1
        while number > 0:
            d = number % 2
            if d == 1:
                result[index] = d
            number = number // 2
            index -= 1
        return result
    
    for i in range(n):
        x = decode(arr1[i])
        y = decode(arr2[i])
        arr = ""
        for i, j in zip(x, y):
            if i == 0 and j == 0:
                arr += " "
            else:
                arr += "#"
        answer.append(arr)
        
    
    return answer