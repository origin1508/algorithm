def solution(s):
    x = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": '4',
        "five": "5",
        "six": '6',
        "seven": '7',
        "eight": '8',
        "nine": '9'
    }
    answer = ""
    index = 0
    for i in range(1, len(s) + 1):
        try:
            int(s[index:i])
            answer += s[index:i]
            index = i
        except:
            if s[index:i] in x:
                answer += x[s[index:i]]
                index = i
    return int(answer)