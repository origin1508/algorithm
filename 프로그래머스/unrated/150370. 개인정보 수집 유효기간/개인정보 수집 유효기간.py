def solution(today, terms, privacies):
    answer = []
    def calc_date(date):
        year, month, day = list(map(int, date.split(".")))
        return day + month * 28 + year * 12 * 28
    
    today = calc_date(today)
    terms = {x[0]: int(x[1]) for x in [term.split(" ") for term in terms]}
    
    for i, privacy in enumerate(privacies):
        date, term = privacy.split(" ")
        date = calc_date(date) + terms[term] * 28
        if date <= today:
            answer.append(i+1)
    return answer