def solution(s, skip, index):
    answer = ''
    list = [chr(i) for i in range(97, 123)]
    for i in skip:
        list.remove(i)
    
    def find(list, s, index):
        order = (list.index(s) + index) % len(list)
        return list[order]
    
    for i in s:
        answer += find(list, i, index)
    
    return answer

