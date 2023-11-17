function solution(my_string) {
    let operator = "+"
    var answer = my_string.split(" ").reduce((acc, cur) => {
        if (!isNaN(cur)) {
            return operator === "+" ? acc + Number(cur) : acc - Number(cur)
        } else {
            operator = cur
            return acc
        }
    }, 0)
    return answer;
}