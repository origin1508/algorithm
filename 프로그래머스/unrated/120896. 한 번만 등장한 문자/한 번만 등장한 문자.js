function solution(s) {
    var answer = [...s].sort().filter((el) => s.indexOf(el) === s.lastIndexOf(el)).join("")
    return answer;
}