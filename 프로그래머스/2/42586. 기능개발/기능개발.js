function solution(progresses, speeds) {
    var answer = [];
    let count = 1;
    const workingTime = progresses.map((el, index) => Math.ceil((100 - el) / speeds[index]))
    const temp = [workingTime.shift()]
    while (temp.length > 0) {
        const prev = temp.shift()
        const next = workingTime.shift()
        if (prev >= next) {
            temp.push(prev)
            count++
        }
        else {
            temp.push(next)
            answer.push(count)
            count = 1
        }
        if (workingTime.length == 0) {
                answer.push(count)
                break
            }
    }
    return answer
}