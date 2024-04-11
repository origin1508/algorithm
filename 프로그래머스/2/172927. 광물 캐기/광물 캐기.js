function solution(picks, minerals) {
    const table = [[1, 1, 1], [5, 1, 1], [25, 5, 1]]
    const work = []
    let answer = 0;
    
    const totalPicks = picks.reduce((acc, cur) => acc += cur, 0) * 5
    if (totalPicks < minerals.length) {
        minerals = minerals.slice(0, totalPicks)
    }

    function calcEnergy(work) {
        let result;
        let type = 0
        
        while (picks[type] === 0) {
            if (type === 2) return 0
            type++
        }
        
        result = work.reduce((acc, cur, idx) => acc += cur * table[type][idx], 0)
        picks[type]--
        return result
    }
    
    while(minerals.length > 0) {
        const dug = {diamond: 0, iron: 0, stone: 0};
        let count = 0;
        
        while (count < 5) {
            if (minerals.length === 0) break
            dug[minerals.shift()]++
            count++
        }
        
        work.push(Object.values(dug))
    }
    
    work.sort((a, b) => {
        return a[0] - b[0] !== 0 ? b[0] - a[0] : a[1] - b[1] !== 0 ? b[1] - a[1] : b[2] - a[2]
    })
    
    work.forEach(w => {
        answer += calcEnergy(w)
    })
    
    
    return answer;
}