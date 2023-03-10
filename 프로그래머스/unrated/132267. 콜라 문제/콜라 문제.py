def solution(a, b, n):
    answer = 0
    while n >= a:
        new = (n // a) * b
        empty = n % a + new
        n = empty
        answer += new
        
    return answer