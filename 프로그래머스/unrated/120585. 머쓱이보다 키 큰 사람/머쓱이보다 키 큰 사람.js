function solution(array, height) {
    var answer = 0;
    for (let i of array) {
        i > height && answer++
    }
    return answer;
}