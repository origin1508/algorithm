function solution(common) {
    var answer = 0;
    let d;
    let r;
    const n = common.length
    if(common[0] - common[1] === common[1] - common[2]) {
        d = common[1] - common[0]
    } else {
        r = common[1] / common[0]
    }
    answer = Number.isInteger(d) ? common[0] + n * d : common[0] * r ** n
    return answer
}