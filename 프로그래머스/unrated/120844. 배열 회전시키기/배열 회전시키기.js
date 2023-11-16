function solution(numbers, direction) {
    var answer = [];
    switch (direction) {
        case "right":
            answer = [numbers.at(-1), ...numbers.slice(0, -1)]
            break
        case "left":
            answer = [...numbers.slice(1), numbers.at(0)]
    }
    return answer;
}