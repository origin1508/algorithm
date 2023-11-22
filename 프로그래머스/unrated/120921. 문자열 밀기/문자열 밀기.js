function solution(A, B) {
    if (A === B) return 0
    
    var answer = 0;
    const Aarr = [...A];
    for (let i = 0; i < Aarr.length; i++) {
        Aarr.unshift(Aarr.pop())
        answer++
        if (Aarr.join("") === B) {
            break
        }
    }
    console.log(answer)
    return answer === A.length ? -1 : answer
}