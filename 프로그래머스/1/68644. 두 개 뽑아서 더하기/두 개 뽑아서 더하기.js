function solution(numbers) {
    var answer = [];
    let left = 0
    let right = left + 1
    while(true) {
        answer.push(numbers[left] + numbers[right])
        right++
        if (right > numbers.length - 1) {
            left++
            if (left === numbers.length - 1) break
            right = left + 1
        }
    }
    const result = Array.from(new Set(answer.sort((a, b) => a - b)))
    return result;
}