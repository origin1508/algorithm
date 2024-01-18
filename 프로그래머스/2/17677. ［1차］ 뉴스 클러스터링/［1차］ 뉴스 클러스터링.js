function solution(str1, str2) {
    let answer = 0;
    let union = 0;
    let intersection = 0;
    
    const makeMultiSet = (str) => {
        const multiSet = []
        for (let i = 0; i < str.length - 1; i++) {
            multiSet.push((str[i] + str[i + 1]).toLowerCase())
        }
        const filteredSet = multiSet.filter(el => !el.match(/[^a-z]/g))
        return filteredSet
    } 
    
    const multiSet1 = makeMultiSet(str1)
    const multiSet2 = makeMultiSet(str2)
    
    const multiSetMap1 = multiSet1.reduce((acc, cur) => {
        return {...acc, [cur]: acc[cur] + 1 || 1}
    }, {})
    
    multiSet2.forEach(el => {
        if (el in multiSetMap1 && multiSetMap1[el] > 0) {
            intersection++
            multiSetMap1[el]--
        }
    })
    
    union = multiSet1.length + multiSet2.length - intersection
    answer = Math.floor((union === 0 ? 1 : (intersection / union)) * 65536)
    
    return answer
}