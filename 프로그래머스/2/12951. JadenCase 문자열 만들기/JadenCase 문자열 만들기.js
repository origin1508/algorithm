function solution(s) {
    var answer = ""
    let flag = true
    for (let i = 0; i < s.length; i++) {
        const word = flag ? s[i].toUpperCase() : s[i].toLowerCase()
        answer += word
        if (word === " ") flag = true
        else flag = false
    }
    return answer;
}