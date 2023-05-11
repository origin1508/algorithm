def solution(survey, choices):
    category = {"R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0}
    answer = ''
    def give_score(agree, disagree, choice):
        score = choice - 4
        
        if score > 0:
            category[agree] += score
        elif score < 0:
            category[disagree] -= score
            
    def get_result():
        result = ""
        if category["R"] >= category["T"]:
            result += "R"
        else:
            result += "T"
        
        if category["C"] >= category["F"]:
            result += "C"
        else:
            result += "F"
        
        if category["J"] >= category["M"]:
            result += "J"
        else:
            result += "M"
        
        if category["A"] >= category["N"]:
            result += "A"
        else:
            result += "N"
            
        return result
    
    for s, choice in zip(survey, choices):
        give_score(s[1], s[0], choice)

    
    return get_result()