function solution(orders, course) {
    var answer = [];
    for (let i = 0; i < course.length; i++) {
        const map = {}
        let max = 0;
        const num = course[i]
        for (let j = 0; j < orders.length; j++) {
            const order = orders[j]
            const combination = getCombination(order, num).forEach(el => {
                map[el] ? map[el]++ : map[el] = 1
                max = max < map[el] ? map[el] : max
            })
        }

        if (max >= 2) {
            for (let key in map) {
                if (map[key] === max) answer.push(key)
            }
        }
    }
    return answer.sort();
}

const getCombination = (str, num) => {
    const result = []
    if (num === 1) return [...str]
    
    for (let i = 0; i < str.length; i++) {
        const remain = str.slice(i+1)
        
        const combination = getCombination(remain, num - 1).map(el => [...str[i] + el].sort().join(""))
        result.push(...combination)
    }
    return result
}