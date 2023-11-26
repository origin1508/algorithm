function solution(s) {
    var answer = '';
    const idx = Math.floor(s.length / 2)
    answer = s.length % 2 === 0 ? s[idx - 1] + s[idx] : s[idx]
    return answer;
}