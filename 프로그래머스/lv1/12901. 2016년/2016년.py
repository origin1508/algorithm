def solution(a, b):
    day_of_week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    end_of_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    temp = [4]
    for m in range(a):
        for d in range(end_of_month[m]):
            if m == a-1:
                if d == b:
                    break
            
            ddd = temp.pop()
            next_ddd = ddd + 1
            if next_ddd > 6:
                next_ddd = 0
            temp.append(next_ddd)
    
    answer = day_of_week[temp.pop()]
            
        
    return answer