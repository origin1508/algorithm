function getGCD(a, b) {
    if (b === 0) return a
    return getGCD(b, a % b)
}
function solution(w, h) {
    let answer = 1;
    const gcd = getGCD(w, h)
    const w2 = w / gcd
    const h2 = h / gcd
    
    answer = (w * h) - ((w2 * h2) - (w2 - 1) * (h2 - 1)) * gcd
    
    return answer;
}