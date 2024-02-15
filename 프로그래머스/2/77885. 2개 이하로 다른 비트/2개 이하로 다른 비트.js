

function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]
        if (number % 2 === 0) {
            answer.push(number + 1)
        } else {
            const binary = number.toString(2)
            const index = binary.lastIndexOf("0")
            let result;
            if (index !== -1) {
                result = binary.slice(0, index) + "10" + binary.slice(index+2)
            } else {
                result = binary.slice(0, 1) + "0" + binary.slice(1)
            }
            answer.push(parseInt(result, 2))
        }
        
    }
    return answer;
}