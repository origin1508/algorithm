function solution(n) {
    let answer = 0;
    let index = 2;
    while (index <= n) {
        answer += index
        index += 2
    }
    
    return answer;
}