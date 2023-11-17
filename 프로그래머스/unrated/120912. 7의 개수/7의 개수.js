function solution(array) {
    var answer = array.join("").replace(/[^7]/g, "").length
    return answer;
}