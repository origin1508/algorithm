function solution(s) {
    var answer = [];
    s = s.slice(2, s.length - 2).split("},{").sort((a, b) => a.length - b.length)
    for (let i = 0; i < s.length; i++) {
        const arr = s[i].split(",")
        for (let j = 0; j < arr.length; j++) {
            const element = Number(arr[j])
            if (!answer.includes(element)) answer.push(element)
        }
    }
    return answer;
}