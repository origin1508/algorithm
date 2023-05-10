def solution(new_id):
    special_character = ["-", "_", "."]
    answer = ''
    new_id = new_id.lower()
    
    for c in new_id:
        if 48 <= ord(c) <= 57 or 97 <= ord(c) <= 122 or c in special_character:
            if answer:
                if answer[-1] == "." and c == ".":
                    continue
            answer += c
            
    if answer[0] == ".":
        answer = answer[1:]
    
    if len(answer) == 0:
        answer += "a"
    
    if answer[-1] == ".":
        answer = answer[:-1]
    
    if len(answer) > 15:
        answer = answer[:15]
        if answer[-1] == ".":
            answer = answer[:14]
    
    if len(answer) <= 2:
        while len(answer) != 3:
            answer += answer[-1]
            
    return answer