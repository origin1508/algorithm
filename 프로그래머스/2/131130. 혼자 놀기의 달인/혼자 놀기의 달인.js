function solution(cards) {
    let answer = 0;
    const score = [];
    const open = new Array(cards.length).fill(false);
    
    for (let i = 0; i < cards.length; i++) {
        let count = 0
        const stack = []
        if (!open[i]) stack.push(i)
        while(stack.length > 0) {
            const cur = stack.pop();
            open[cur] = true
            count++
            
            if (!open[cards[cur] - 1]) stack.push(cards[cur] - 1)
        }
        
        score.push(count)
    }
    
    score.sort((a, b) => b - a)
    answer = score[0] * score[1]
    
    return answer
}