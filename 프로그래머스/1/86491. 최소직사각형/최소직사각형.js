function solution(sizes) {
    var answer = [0, 0];
    sizes.forEach(size => {
        const min = Math.min(...size)
        const max = Math.max(...size)
        if (answer[0] < max) {
            answer[0] = max
        }
        if (answer[1] < min) {
            answer[1] = min
        }
    })
    return answer.reduce((acc, cur) => acc *= cur, 1);
}