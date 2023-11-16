function solution(numbers) {
    numbers.sort((a, b) => a - b)
    const result = [numbers.at(0) * numbers.at(1), numbers.at(-1) * numbers.at(-2)]
    var answer = Math.max(...result)
    return answer;
}