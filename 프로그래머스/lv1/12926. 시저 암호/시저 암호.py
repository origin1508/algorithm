def solution(s, n):
    answer = ''
    print(ord("a"), ord("z"), ord("A"), ord("Z"), ord(" "))
    for i in s:
        ascii_i = ord(i)
        if ascii_i == 32:
            answer += i
        elif 65 <= ascii_i <= 90:
            answer += chr(ascii_i + n) if ascii_i + n <= 90 else chr(ascii_i + n - 26)
        elif 97 <= ascii_i <= 122:
            answer += chr(ascii_i + n) if ascii_i + n <= 122 else chr(ascii_i + n - 26)
            
    return answer  