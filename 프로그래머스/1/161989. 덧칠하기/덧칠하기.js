function solution(n, m, section) {
    var answer = 0;
    let done = 0
    for (let i = 0; i < section.length; i++) {
        if (done < section[i]) {
            done = section[i] + m - 1
            answer++
        }
    }
    return answer;
}