function solution(lottos, win_nums) {
    const grade = [6, 6, 5, 4, 3, 2, 1]
    var answer = [];
    let unknown = 0;
    let correct = 0;
    for (let i = 0; i < lottos.length; i++) {
        const lotto = lottos[i]
        if (lotto === 0) {
            unknown++
            continue
        }
        
        if (win_nums.includes(lotto)) {
            correct++
        }
    }
    answer.push(grade[correct + unknown])
    answer.push(grade[correct])
    return answer;
}