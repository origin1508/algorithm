function solution(n) {
    var answer = n
    while (true) {
        answer++
        if ([...answer.toString(2)].filter(el => el !== "0").length === [...n.toString(2)].filter(el => el !== "0").length){
            break
        }
    }
    return answer;
}