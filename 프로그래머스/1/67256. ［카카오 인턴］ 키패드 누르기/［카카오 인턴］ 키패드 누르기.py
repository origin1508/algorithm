def solution(numbers, hand):
    answer = ''
    thumbs = {"L": [3, 0], "R": [3, 2]}
    
    for number in numbers:
        row = (number - 1) // 3
        column = (number - 1) % 3
        if number == 0:
            row = 3
            column = 1
        
        if column == 0:
            thumbs["L"] = [row, column]
            answer += "L"
        elif column == 2:
            thumbs["R"] = [row, column]
            answer += "R"
        else:
            L_R, L_C = thumbs["L"]
            R_R, R_C = thumbs["R"]
            
            distance_L = abs(row - L_R) + abs(column - L_C)
            distance_R = abs(row - R_R) + abs(column - R_C)
            if distance_L > distance_R:
                thumbs["R"] = [row, column]
                answer += "R"
            elif distance_L < distance_R:
                thumbs["L"] = [row, column]
                answer += "L"
            else:
                if hand == "right":
                    thumbs["R"] = [row, column]
                    answer += "R"
                else:
                    thumbs["L"] = [row, column]
                    answer += "L"
    return answer