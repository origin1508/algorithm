def solution(lottos, win_nums):
    grade = [6, 6, 5, 4, 3, 2, 1]
    answer = []
    correct = 0
    for i in lottos:
        if i in win_nums:
            correct += 1
    random = lottos.count(0)
    
    answer.append(grade[correct + random])
    answer.append(grade[correct])
    
    return answer