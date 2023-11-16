function solution(age) {
    var answer = [...age.toString()].map(el => String.fromCharCode(Number(el) + 97)).join("")
    return answer;
}