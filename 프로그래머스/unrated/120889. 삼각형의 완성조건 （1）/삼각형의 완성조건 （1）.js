function solution(sides) {
    const [a, b, c] = sides.sort((a, b) => a - b)
    const answer = c < a + b ? 1 : 2
    return answer
}