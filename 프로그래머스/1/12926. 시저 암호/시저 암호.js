function solution(s, n) {
    var answer = [...s].map((el) => {
        if (el === " ") return el
        
        const isUpperCase = el.toUpperCase() === el
        const code = el.toLowerCase().charCodeAt() + n
        const incode = String.fromCharCode(code > 122 ? code - 26 : code)
        return isUpperCase ? incode.toUpperCase() : incode
    })
    return answer.join("");
}