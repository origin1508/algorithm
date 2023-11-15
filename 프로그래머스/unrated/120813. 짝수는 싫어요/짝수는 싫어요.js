function solution(n) {
    return new Array(n).fill(0).map((_, index) => index + 1).filter(v => v % 2 === 1)
}