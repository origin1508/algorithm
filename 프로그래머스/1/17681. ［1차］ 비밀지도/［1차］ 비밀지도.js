function solution(n, arr1, arr2) {
    var answer = []
    
    for (let i = 0; i < n; i++) {
        const digit = (arr1[i] | arr2[i]).toString(2)
        const result = [...digit].map((d) => d === "1" ? "#" : " ").join("")
        answer.push(result)
    }

    return answer.map(el => " ".repeat(n - el.length) + el);
}