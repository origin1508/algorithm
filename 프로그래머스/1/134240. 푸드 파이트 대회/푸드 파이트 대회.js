function solution(food) {
    var answer = '';
    let foods = ""
    for (let i = 1; i < food.length; i++) {
        const num = Math.floor(food[i] / 2)
        foods += (i + "").repeat(num)
    }
    answer += foods + "0" + [...foods].reverse().join("")
    return answer
}