def solution(sizes):
    for i in range(len(sizes)):
        size = sizes[i].copy()
        sizes[i][0] = max(size)
        sizes[i][1] = min(size)
    
    answer = max([i[0] for i in sizes]) * max([i[1] for i in sizes])

    return answer