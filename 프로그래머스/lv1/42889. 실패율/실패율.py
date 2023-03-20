def solution(N, stages):
    map = {}
    answer = []
    set_stages = set(stages)
    
    for i in range(1, N+2):
        map[i] = [0, 0]

    for s in set_stages:
        count = stages.count(s)
        for i in range(1, s + 1):
            if i == s:
                map[i][0] += count
            map[i][1] += count
    
    for n in range(1, N + 1):
        trial = map[n][1]
        failure = map[n][0]
        if trial == 0:
            answer.append((0, n))
        else:
            answer.append((failure/trial, n))

    answer.sort(key = lambda x: (-x[0], x[1]))
    return [x[1] for x in answer]