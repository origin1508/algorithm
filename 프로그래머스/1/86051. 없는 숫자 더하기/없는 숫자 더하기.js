function solution(numbers) {
    const zeroToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let answer = 0;
    zeroToNine.forEach(number => {
        if (numbers.indexOf(number) === -1) {
            answer += number
        }
    })
    return answer;
}