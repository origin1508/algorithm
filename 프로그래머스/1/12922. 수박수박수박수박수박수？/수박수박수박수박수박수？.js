function solution(n) {
    const word = ["수", "박"]
    var answer = '';
    for (let i = 0; i < n; i++) {
        answer += word[i % 2]
    }
    return answer;
}