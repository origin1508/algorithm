function solution(n, k) {
    const isPrime = (num) => {
        if (num === 1) return false
        if (num === 2) return true
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) return false
        }
        return true
    }
    let answer = 0
    
    const numberArray = n.toString(k).split(0)
    numberArray.forEach(num => {
        if (num && isPrime(Number(num))) answer++
    })
    return answer;
}