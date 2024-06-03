function getCombination(array, n) {
    const result = []
    if (n === 1) return array.map(it => [it])
    
    array.forEach((it, index, self) => {
        const remain = self.slice(index + 1);
        
        const combination = getCombination(remain, n - 1).map((comb) => [self[index], ...comb])
        result.push(...combination)
    })
    return result
}

function solution(relation) {
    const answer = [];
    const columns = new Array(relation[0].length).fill(0).map((_, idx) => idx)
    const combinations = []
    
    for (let i = 1; i <= columns.length; i++) {
        combinations.push(...getCombination(columns, i))
    }
    
    for (let i = 0; i < combinations.length; i++) {
        const combination = combinations[i]
        
        if (answer.some(key => key.every(k => combination.includes(k)))) continue
        
       const set = new Set(relation.flatMap(it => combination.reduce((acc, cur) => acc += it[cur], "")))
       
       if (set.size === relation.length) {
           answer.push(combination)
       }
       
    }
    
    
    return answer.length;
}