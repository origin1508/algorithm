function solution(s) {
    var answer = '';
    const idx = s.length / 2
    if (idx === Math.floor(idx)) {
        answer = s.slice(idx - 1, idx + 1)
    } else {
        answer = s[Math.floor(idx)]
    }
    
    return answer;
}