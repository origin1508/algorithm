function solution(a, b) {
    const getGCD = (a, b) => b === 0 ? a : getGCD(b, a % b)
    const gcd = getGCD(a, b)
    let bunmo = b / gcd
    
    while (bunmo % 2 === 0) {
        bunmo /= 2
    }
    
    while (bunmo % 5 === 0) {
        bunmo /= 5
    }
    
    return bunmo === 1 ? 1 : 2
}