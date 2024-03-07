function solution(numbers) {
    let answer = '';
    numbers.sort((a, b) => {
        const numA = parseInt(a.toString() + b.toString())
        const numB = parseInt(b.toString() + a.toString())

        return numB - numA
    })
    
    answer = parseInt(numbers.join("")) === 0 ? "0" : numbers.join("")
    return answer;
}