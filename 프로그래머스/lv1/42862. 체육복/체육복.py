def solution(n, lost, reserve):
    answer = 0
    lost_set = set(lost) - set(reserve)
    reserve_set = set(reserve) - set(lost)
    student = [1] * (n + 1)
    for l in lost_set:
        if (l - 1) in reserve_set:
            reserve_set.remove(l-1)
            continue
        if (l + 1) in reserve_set:
            reserve_set.remove(l+1)
            continue
        student[l] = 0
    
    return student.count(1) - 1