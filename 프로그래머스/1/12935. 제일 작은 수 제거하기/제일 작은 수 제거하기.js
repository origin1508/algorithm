function solution(arr) {
    if (arr.length === 1) return [-1]
    const min = Math.min(...arr)
    const index = arr.indexOf(min)
    var answer = arr.slice(0, index).concat(arr.slice(index + 1));
    return answer;
}