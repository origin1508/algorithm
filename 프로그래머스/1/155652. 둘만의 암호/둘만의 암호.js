function solution(s, skip, index) {
    const char = []
    const aCode = "a".charCodeAt();
    const zCode = "z".charCodeAt();
    for (let i = aCode; i <= zCode; i++) {
        const c = String.fromCharCode(i)
        if ([...skip].includes(c)) continue
        char.push(c)
    }
    
    const answer = [...s].map((el) => {
        const newIdx = (char.indexOf(el) + index) % char.length
        return char[newIdx]
    }).join("")
    return answer;
}