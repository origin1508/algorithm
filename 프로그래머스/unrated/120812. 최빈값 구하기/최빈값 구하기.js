function solution(array) {
    const result = new Array(1000).fill(0)
    array.forEach(item => result[item] += 1)
    const maxValue = Math.max(...result)
    return result.filter(item => item === maxValue).length > 1 ? -1 : result.indexOf(maxValue)
}