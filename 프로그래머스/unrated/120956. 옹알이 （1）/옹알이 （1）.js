function solution(babbling) {
    var answer = 0;
    const pronounces = ["aya", "ye", "woo", "ma"]
    answer = babbling.map(str => {
        let replacedStr = str;
        pronounces.forEach(pronounce => {
            replacedStr = replacedStr.replace(pronounce, "*")
        })
        return replacedStr
    })
    return answer.filter(el => !el.replaceAll("*", "")).length
}