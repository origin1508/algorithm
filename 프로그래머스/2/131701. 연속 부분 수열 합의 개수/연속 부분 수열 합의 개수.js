function solution(elements) {
    const length = elements.length
    const sequence = new Array(length ** 2).fill(0)

    
    for (let i = 0; i < length; i++) {
        sequence[i] = elements[i]
    }
    
    for (let i = length; i < sequence.length; i++) {
        const toAdd = (Math.floor(i / length) + i % length) % length
        sequence[i] = sequence[i - length] + elements[toAdd]
    }
    
    const answer = new Set(sequence).size
    return answer;
}