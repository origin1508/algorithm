from collections import deque

def solution(cards1, cards2, goal):
    answer = ''
    flag = True
    cards1 = deque(cards1)
    cards2 = deque(cards2)
    goal = deque(goal)
    
    while goal:
        word = goal.popleft()
        if cards1 and cards1[0] == word:
            cards1.popleft()
            continue
        
        if cards2 and cards2[0] == word:
            cards2.popleft()
            continue
        
        flag = False
        break

    return "Yes" if flag else "No"