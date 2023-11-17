function solution(before, after) {
    const afterArr = [...after]
    for (let i of before) {
        const index = afterArr.indexOf(i)
        if (index !== -1) afterArr.splice(index, 1)
        else return 0

        if (afterArr.length === 0) return 1
    }
    return answer;
}