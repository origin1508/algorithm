function solution(number) {
    var answer = 0;
    function getCombination(arr, num) {
        if (num === 1) return arr.map((el) => [el])
        const result = []
        
        arr.map((el, i, self) => {
            const select = el
            const remain = self.slice(i + 1)
            
            const combination = getCombination(remain, num - 1).map((el) => [select, ...el])
            result.push(...combination)
        })
        return result
    }
    const combination = getCombination(number, 3)
    
    return combination.filter((el) => el.reduce((acc, cur) => acc += cur, 0) === 0).length
}