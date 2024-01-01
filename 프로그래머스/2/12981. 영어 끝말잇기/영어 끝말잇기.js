function solution(n, words) {
    let answer = [0, 0];
    const history = new Set()
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (i === 0) {
            history.add(word)
            continue
        }
        
        const prev = words[i - 1]
        const player = i % n + 1
        const round = Math.floor(i / n) + 1
        
        if (history.has(word) || prev.at(-1) !== word[0]) return [player, round]
        history.add(word)
    }

    return answer;
}