function solution(keymap, targets) {
    var answer = [];
    const key = {};
    for (let i = 0; i < keymap.length; i++) {
        const pad = keymap[i]
        for (let j = 0; j < pad.length; j++) {
            const word = pad[j]
            if (word in key) {
                key[word] = Math.min(key[word], j + 1)
            } else {
                key[word] = j + 1
            }
        }
    }
    
    for (let i = 0; i < targets.length; i++) {
        let count = 0;
        for (let j = 0; j < targets[i].length; j++) {
            const word = targets[i][j]
            if (word in key) count += key[word]
            else {
                count = -1
                break
            }
        }
        answer.push(count)
    }
    
    return answer;
}