import math
def solution(n, words):
    answer = [0, 0]
    length = len(words)
    prev_word = [words[0]]
    
    for i in range(1, length):
        order = (i % n) + 1
        game = (i // n) + 1
        print(order, game)
        
        if prev_word[-1][-1] != words[i][0] or words[i] in prev_word:
            answer = [order, game]
            break
        else:
            prev_word.append(words[i])
    
    return answer