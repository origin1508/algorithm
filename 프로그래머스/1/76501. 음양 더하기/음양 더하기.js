function solution(absolutes, signs) {
    const answer = signs.map((sign, i) => {
        if (sign) return absolutes[i]
        else return -absolutes[i]
    }).reduce((acc, cur) => acc += cur, 0)
    
    return answer;
}