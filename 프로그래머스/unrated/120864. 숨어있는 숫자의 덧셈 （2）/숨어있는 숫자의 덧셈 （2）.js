function solution(my_string) {
    var answer = my_string.replace(/[a-z]/gi, " ").split(" ").reduce((acc, cur) => acc += Number(cur), 0)

    return    answer}