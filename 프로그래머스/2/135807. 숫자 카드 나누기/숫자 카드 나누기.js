function gcd([a, ...rest]) {
    let result = a
    
    while (rest.length > 0) {
        let number = rest.pop()
        while (number !== 0) {
            let r = result % number
            result = number
            number = r
        }
    }
    return result
}

function solution(arrayA, arrayB) {
    let answer = 0;
    let gcdA = gcd(arrayA);
    let gcdB = gcd(arrayB);
    
    arrayA.forEach(el => {
        if (el % gcdB === 0) {
            gcdB = 0
        }
    })
    
    arrayB.forEach(el => {
        if (el % gcdA === 0) {
            gcdA = 0
        }
    })
    
    answer = Math.max(gcdA, gcdB)
    
    
    return answer;
}