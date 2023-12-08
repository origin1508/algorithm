function solution(answers) {
    const first = [1, 2, 3, 4, 5]
    const second = [2, 1, 2, 3, 2, 4, 2, 5]
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const point = [0, 0, 0]
    var answer = []
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === first[i % first.length]) {
            point[0] += 1
        }
        
        if (answers[i] === second[i % second.length]) {
            point[1] += 1
        }
        
        if (answers[i] === third[i % third.length]) {
            point[2] += 1
        }
    };
    const maxPoint = Math.max(...point)
    answer = point.reduce((acc, cur, i) => cur === maxPoint ? [...acc, i + 1] : acc,[])
    return answer;
}