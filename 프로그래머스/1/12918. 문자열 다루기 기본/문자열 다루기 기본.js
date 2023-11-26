function solution(s) {
    let answer = (s.length === 4 || s.length === 6) && s.replace(/\d/g, "").length === 0
    return answer;
}