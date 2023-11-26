function solution(n, m) {
    const getGCD = (a, b) => b === 0 ? a : getGCD(b, a % b)
    const gcd = getGCD(n, m)
    var answer = [gcd, n * m / gcd];
    return answer;
}