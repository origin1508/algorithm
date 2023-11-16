function solution(order) {
    var answer = 0;
    [...order.toString()].forEach(el => {
        if (Number(el) !== 0 & Number(el) % 3 === 0) {
            answer += 1
        }
    })
    return answer;
}