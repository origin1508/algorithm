function solution(a, b) {
    
    var answer = ((a + b) * (Math.abs(b - a) + 1)) / 2
    return answer;
}