function solution(s) {
    let target = [...s]
    var answer = [0, 0];
    while(true) {
        if (target.length === 1) break
        answer[0]++
        const filteredTarget = target.filter(el => el !== "0")
        answer[1] += target.length - filteredTarget.length
        target = [...filteredTarget.length.toString(2)]
    }
    
    return answer;
}