function solution(array) {
    const maxNum = Math.max(...array)
    var answer = [maxNum, array.indexOf(maxNum)];
    return answer;
}