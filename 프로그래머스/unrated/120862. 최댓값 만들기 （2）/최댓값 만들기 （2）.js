function solution(numbers) {
    numbers.sort((a, b) => a - b)
    const getMultiply = (numbers) => numbers.reduce((acc, cur) => acc *= cur, 1)
    const result = [getMultiply(numbers.slice(0, 2)), getMultiply(numbers.slice(-2))]
    var answer = Math.max(...result)
    return answer;
}