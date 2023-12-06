function solution(array, commands) {
    var answer = commands.map(command => {
        const [i, j, k] = command
        const arr = array.slice(i - 1, j)
        return arr.sort((a, b) => a - b)[k - 1]
    })
    return answer;
}