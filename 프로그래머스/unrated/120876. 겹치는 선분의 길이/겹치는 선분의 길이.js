function solution(lines) {
    var answer = 0;
    const map = {};
    for (let line of lines) {
        for (let i = line[0] + 0.5; i < line[1]; i++) {
            if (i in map) {
                map[i] += 1
            } else {
                map[i] = 1
            }
        }
    }
    answer = Object.values(map).filter(el => el >= 2).length
    return answer;
}