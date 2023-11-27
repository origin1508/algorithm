function solution(s) {
    var answer = s.toLowerCase().split(" ").map((str) => [...str].map((el, i) => i % 2 === 0 ? el.toUpperCase() : el).join("")
    ).join(" ")
    return answer;
}