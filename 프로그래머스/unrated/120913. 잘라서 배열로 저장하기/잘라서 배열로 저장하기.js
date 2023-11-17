function solution(my_str, n) {
    var answer = [];
    let index = 0;
    for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
        answer.push(my_str.slice(index, index+n))
        index += n
    }
    return answer;
}