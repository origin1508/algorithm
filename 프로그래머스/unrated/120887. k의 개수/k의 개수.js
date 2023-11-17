function solution(i, j, k) {
    var answer = 0;
    for (let x = i; x <= j; x++) {
        [...x.toString()].forEach(el => {
            if (el === k+"") answer++
        })
    }
    return answer;
}