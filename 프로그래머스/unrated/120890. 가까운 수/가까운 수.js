function solution(array, n) {
    var answer = array.sort((a, b) => b - a).reduce((acc, cur) => {
        return Math.abs(acc - n) >= Math.abs(cur - n) ? cur : acc
    }, 999)
    return answer;
}