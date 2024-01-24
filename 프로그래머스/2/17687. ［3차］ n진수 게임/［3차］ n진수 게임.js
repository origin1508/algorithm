function solution(n, t, m, p) {
    let answer = "";
    let number = 0
    let count = 0
    
    while (answer.length < t) {
        const converted = number.toString(n).split("")
        for (let i = 0; i < converted.length; i++) {
            if (count % m === p - 1) answer += converted[i].toUpperCase()
            if (answer.length === t) break
            count++
        }
        
        number++
    }
    
    return answer;
}