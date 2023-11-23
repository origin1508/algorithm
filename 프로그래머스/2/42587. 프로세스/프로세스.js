function solution(priorities, location) {
    var answer = 0;
    while (true) {
        const cur = priorities.shift();
        const priority = Math.max(...priorities)
        if (cur >= priority) {
            answer++
            if (location === 0) break
        } else {
            priorities.push(cur)
        }
        location = location === 0 ? priorities.length - 1 : location - 1
    }
    return answer;
}