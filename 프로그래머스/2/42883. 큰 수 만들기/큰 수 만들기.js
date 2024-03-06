function solution(number, k) {
    const answer = [];
    
    for (let i = 0; i < number.length; i++) {
        while (answer.length > 0 && answer.at(-1) < number[i] && k > 0) {
            k--
            answer.pop()
        }
        answer.push(number[i])
    }
    
    answer.splice(number.length - k, k)
    return answer.join("")
}