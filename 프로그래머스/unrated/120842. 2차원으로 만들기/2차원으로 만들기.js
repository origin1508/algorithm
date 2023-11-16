function solution(num_list, n) {
    var answer = new Array(num_list.length / n).fill(0).map(_ => [])
    num_list.forEach((el, i) => answer[Math.floor(i / n)].push(el))
    return answer;
}