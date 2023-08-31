def solution(elements):
    length = len(elements)
    result = []
    answer = 0
    
    for i in range(length):
        add = i + 1
        for j in range(length):
            end = j + add
            if end > length:
                result.append(sum(elements[j:] + elements[:end - length]))
            else:
                result.append(sum(elements[j:j + add]))
        

    return len(set(result))