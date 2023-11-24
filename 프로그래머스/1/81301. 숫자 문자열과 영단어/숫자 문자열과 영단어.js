function solution(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = s;
    
    words.forEach((v, i) => {
        const re = new RegExp(v, "g")
        answer = answer.replace(re, i)
    })
    return Number(answer);
}