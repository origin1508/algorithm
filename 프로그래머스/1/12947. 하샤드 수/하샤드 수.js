function solution(x) {
    const divide = [...x.toString()].reduce((acc, cur) => acc += Number(cur), 0)
    const answer = x % divide === 0
    return answer;
}