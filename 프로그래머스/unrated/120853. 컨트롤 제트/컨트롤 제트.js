function solution(s) {
    let answer = 0
    let temp = 0
    s.split(" ").forEach((el) => {
        if (el === "Z") answer = temp;
        else {
            temp = answer
            answer += Number(el)
        }
    })
    return answer;
}