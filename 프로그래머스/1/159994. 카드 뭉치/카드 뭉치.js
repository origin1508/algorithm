function solution(cards1, cards2, goal) {
    let answer = "Yes";
    for (let i = 0; i < goal.length; i++) {
        const target = goal[i]
        if (cards1[0] === target) {
            cards1.shift()
            continue
        }
        
        if (cards2[0] === target) {
            cards2.shift()
            continue
        }
        
        answer = "No"
        break
    }
    return answer;
}