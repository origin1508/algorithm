function solution(n) {
    var answer = [...n.toString()].sort((a, b) => Number(b) - Number(a)).join("")
    return Number(answer);
}