def solution(number, limit, power):
    answer = []
    for n in range(1, number + 1):
        count = 0
        for i in range(1, int(n ** 0.5) + 1):
            if n % i == 0:
                count += 1
            
        if (n ** 0.5) == int(n ** 0.5):
            answer.append(count * 2 - 1)
        else:
            answer.append(count * 2)

    return sum([i if i <= limit else power for i in answer ])