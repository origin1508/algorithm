function solution(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    var answer = "";
    let temp = ""
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            temp += s[i]
            if (words.indexOf(temp) !== -1) {
                answer += words.indexOf(temp).toString()
                temp = ""
            }
        } else {
            answer += s[i]
        }
    }
    return Number(answer);
}