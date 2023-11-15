function solution(num_list) {
    var answer = [0, 0];
    num_list.forEach(num => answer[num % 2] += 1)
    return answer;
}