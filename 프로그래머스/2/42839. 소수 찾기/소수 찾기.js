function getPermutation(array, number) {
    if (number === 1) return array.map(el => [el])
    const result = []
    
    array.forEach((el, idx, self) => {
        const rest = [...array.slice(0, idx), ...array.slice(idx + 1)]
        const permutation = getPermutation(rest, number - 1).map(permutation => [el, ...permutation])
        
        result.push(...permutation)
    })
    
    return result
}

function isPrime(number) {
    if (number === 1 || number === 0) return false
    if (number === 2) return true
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    
    return true
}

function solution(numbers) {
    const answer = new Set()
    const numberCards = [...numbers]
    for (let i = 1; i <= numbers.length; i++) {
        getPermutation(numberCards, i).forEach(el => {
            answer.add(Number(el.join("")))
        })
    }

    return [...answer].reduce((acc, cur) => {
        if (isPrime(cur)) acc++
        return acc
    }, 0);
}