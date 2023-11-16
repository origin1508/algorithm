function solution(my_string) {
    var answer = [...my_string].map(el => Number(el)).filter(el => Number.isInteger(el)).sort((a, b) => a - b)
    return answer;
}