function solution(price, money, count) {
    var answer = -1;
    let totalPrice = 0;
    for (let i = 1; i <= count; i++) {
        totalPrice += price * i
    }
    answer = totalPrice - money <= 0 ? 0 : totalPrice - money
    return answer;
}