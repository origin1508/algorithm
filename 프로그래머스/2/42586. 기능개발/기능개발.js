function solution(progresses, speeds) {
    var answer = [];
    let count = 1;
    const workingTime = progresses.map((el, index) => Math.ceil((100 - el) / speeds[index]))
    while (true) {
        const prev = workingTime.shift()
        
        if (workingTime.length == 0) {
            answer.push(count)
            break
        }
        
        const next = workingTime.shift()
        if (prev >= next) {
            workingTime.unshift(prev)
            count++
        }
        else {
            workingTime.unshift(next)
            answer.push(count)
            count = 1
        }
    }
    return answer
}