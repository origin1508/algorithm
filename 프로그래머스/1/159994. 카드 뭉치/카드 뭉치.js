function solution(cards1, cards2, goal) {
    let answer = "Yes";
    let idx1 = 0
    let idx2 = 0
    for (let i = 0; i < goal.length; i++) {
        const target = goal[i]
        if (cards1[idx1] === target) {
            idx1++
            continue
        }
        
        if (cards2[idx2] === target) {
            idx2++
            continue
        }
        
        answer = "No"
        break
    }
    return answer;
}