function solution(num, total) {
    const answer = new Array(num).fill(Math.ceil(total / num) - Math.floor(num / 2)).map((v, i) => v + i)
    
    return answer;
}