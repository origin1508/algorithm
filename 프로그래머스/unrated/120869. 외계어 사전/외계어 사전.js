function solution(spell, dic) {
    const word = spell.sort().join("")
    const answer = dic.some((el) => [...el].sort().join("") === word) ? 1 : 2
    return answer;
}