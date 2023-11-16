function solution(x, n) {
    var answer = new Array(n).fill(0).map((_, index) => (index + 1) * x)
    return answer;
}