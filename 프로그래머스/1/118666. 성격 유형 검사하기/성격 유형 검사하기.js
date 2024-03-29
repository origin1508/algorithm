function solution(survey, choices) {
    const type = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]]
    const result = {"R": 0,"T":0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0};
    survey.forEach((type, idx) => {
        const [disagree, agree] = type.split("");
        const score = choices[idx] - 4;
        if (score < 0) result[disagree] -= score;
        else result[agree] += score;
    })
    
    const answer = type.map(([a, b]) => result[a] >= [result[b]] ? a : b).join("");
    
    return answer
}