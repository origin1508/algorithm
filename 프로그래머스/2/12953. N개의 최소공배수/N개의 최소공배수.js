const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b)

function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc, cur, idx) => {
        if (idx === 0) return cur
        else {
            const gcd = getGCD(acc, cur)
            acc *= cur / gcd
            return acc
        }
    }, 1)
    
    return answer;
}