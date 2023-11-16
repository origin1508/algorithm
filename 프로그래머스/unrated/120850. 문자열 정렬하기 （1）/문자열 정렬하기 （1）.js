function solution(my_string) {
    var answer = my_string.replace(/[^0-9]/g, "").split("").map(el => parseInt(el)).sort((a, b) => a - b)
    return answer;
}