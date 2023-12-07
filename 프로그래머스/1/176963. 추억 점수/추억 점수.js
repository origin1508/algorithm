function solution(name, yearning, photo) {
    const yearningMap = new Map();
    for (let i = 0; i < name.length; i++) {
        yearningMap.set(name[i], yearning[i])
    }
    
    const answer = photo.map(people => people.reduce((acc, cur) => {
        return yearningMap.has(cur) ? acc += yearningMap.get(cur) : acc
    }, 0))
    
    
    return answer
}