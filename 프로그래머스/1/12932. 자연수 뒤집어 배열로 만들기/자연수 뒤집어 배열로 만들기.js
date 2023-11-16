function solution(n) {
    var answer = [...n.toString()].sort(() => -1).map(el => Number(el))
    return answer;
}