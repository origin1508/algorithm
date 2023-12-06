function solution(s) {
    const map = new Map()
    var answer = [...s].map((el, i) => {
        if (map.has(el)) {
            const distance = i - map.get(el)
            map.set(el, i)
            return distance
        } else {
            map.set(el, i)
            return -1
        }
    })
    
    return answer;
}