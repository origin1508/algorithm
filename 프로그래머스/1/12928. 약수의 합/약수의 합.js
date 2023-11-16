function solution(n) {
    var answer = new Array(n).fill(0).map((_, index) => index + 1).filter(el => n % el === 0).reduce((acc, cur) => acc += cur, 0)
    return answer;
}