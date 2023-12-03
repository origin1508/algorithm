function solution(t, p) {
    var answer = 0;
    for (let i = 0; i < t.length; i ++) {
        const end = i + p.length
        if (end > t.length) break
        if (Number(t.slice(i, end)) <= Number(p)) answer++
    }
    return answer;
}