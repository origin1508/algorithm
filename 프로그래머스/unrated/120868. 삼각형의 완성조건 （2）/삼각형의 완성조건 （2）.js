function solution(sides) {
    var answer = 0;
    const min = Math.min(...sides)
    answer = 2* min - 1
    return answer;
}