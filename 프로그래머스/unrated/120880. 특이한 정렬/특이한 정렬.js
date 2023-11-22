function solution(numlist, n) {
    var answer = [];
    const distance = numlist.map((el) => [el, Math.abs(n - el)])
    distance.sort((a, b) => {
        if (a[1] - b[1] === 0) {
            return b[0] - a[0]
        } else return a[1] - b[1]
    })
    answer = distance.map(el => el[0])
    return answer;
}