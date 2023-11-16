function solution(n) {
    const getGCD = (num1, num2) => !num2 ? num1 : getGCD(num2, num1 % num2);
    const gcd = getGCD(n, 6)
    const answer = (6 * n) / gcd / 6
    return answer;
}