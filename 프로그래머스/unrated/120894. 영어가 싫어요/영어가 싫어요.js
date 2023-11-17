function solution(numbers) {
    const trans = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    var answer = ""
    let start = 0;
    for (let end = 1; end <= numbers.length; end++) {
        const number = numbers.slice(start, end)
        if (trans.includes(number)) {
            answer += trans.indexOf(number).toString()
            start = end
        }
    }
    return Number(answer);
}