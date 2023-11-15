function solution(numer1, denom1, numer2, denom2) {
    function getGCD(num1, num2) {
        if (num1 === 0 || num2 === 0) {
            return num1 === 0 ? num2 : num1
        }
        
        return num1 > num2 ? getGCD(num2, num1 % num2) : getGCD(num1, num2 % num1)
    }
    
    const numer = numer1 * denom2 + numer2 * denom1
    const denom = denom1 * denom2
    const gcd = getGCD(numer, denom)
    
    return [numer / gcd, denom / gcd]
}