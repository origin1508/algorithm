function solution(n) {
    var answer = 1;
    for (let i = 1; i < n; i++) {
        answer++
        while (answer % 3 === 0 || answer.toString().indexOf("3") !== -1) {
            answer++
        }
    }
    
    return answer;
}