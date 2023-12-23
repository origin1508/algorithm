function solution(s) {
    s = s.split(" ").sort((a, b) => Number(a) - Number(b))
    var answer = s[0] + " " + s.at(-1)
    return answer;
}