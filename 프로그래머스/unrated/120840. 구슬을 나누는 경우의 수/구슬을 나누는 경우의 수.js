function solution(balls, share) {
    const bunja = new Array(share).fill(0).map((_, index) => balls - index).reduce((acc, cur) => acc *= cur, 1)
    const bunmo = new Array(share).fill(0).map((_, index) => share - index).reduce((acc, cur) => acc *= cur, 1)
    var answer = bunja / bunmo
    return answer;
}