function solution(n, k) {
    const answer = [];
    const numbers = new Array(n).fill(1).map((el, idx) => el + idx)
    let order = k - 1
    let total = numbers.reduce((acc, cur) => acc * cur, 1)

    for (let i = n; i >= 1; i--) {
        total /= i
        const idx = Math.floor(order / total)
        order %= total
        const num = numbers[idx]
        numbers.splice(idx, 1)
        answer.push(num)
    }
    
    return answer;
}