def solution(today, terms, privacies):
    today = [int(i) for i in today.split(".")]
    terms_dict = {}
    answer = []
    cnt = 1
    
    for term in terms:
        term = term.split(" ")
        terms_dict[term[0]] = int(term[-1])
    
    for privacy in privacies:
        privacy = privacy.split(" ")
        date = list(map(int, privacy[0].split(".")))
        year, month, day = date
        month += terms_dict[privacy[1]]
        day -= 1
        
        while month > 12:
            month -= 12
            year += 1
        
        if day == 0:
            month -= 1
            day = 28
            if month == 0:
                year -= 1
                month = 12
        
        print(year, month, day)
        if year - today[0] < 0:
            answer.append(cnt)
        elif year - today[0] == 0:
            if month - today[1] < 0:
                answer.append(cnt)
            elif month - today[1] == 0:
                if day - today[2] < 0:
                    answer.append(cnt)
        
        
        cnt += 1
        
        
    return answer