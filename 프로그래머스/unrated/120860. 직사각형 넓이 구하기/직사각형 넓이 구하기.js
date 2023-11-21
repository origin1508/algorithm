function solution(dots) {
    var answer;
    const x = dots.map((el) => el[0])
    const y = dots.map(el => el[1])
    const xLength = Math.abs(Math.max(...x) - Math.min(...x))
    const yLength = Math.abs(Math.max(...y) - Math.min(...y))
    return xLength * yLength
}