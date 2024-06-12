function solution(arr) {
    const answer = [0, 0];
    
    if (arr.every(row => row.every(it => it === 1))) return [0, 1]
    if (arr.every(row => row.every(it => it === 0))) return [1, 0]
    
    const q1 = []
    const q2 = []
    const q3 = []
    const q4 = []
    
    for (let i = 0; i < arr.length; i++) {
        const row = arr[i]
        if (i < arr.length / 2) {
            q1.push(row.slice(0, row.length / 2))
            q2.push(row.slice(row.length / 2))
        } else {
            q3.push(row.slice(0, row.length / 2))
            q4.push(row.slice(row.length / 2))
        }
    }
    
    return [q1, q2, q3, q4].reduce((acc, cur) => {
        const result = solution(cur)
        acc[0] += result[0]
        acc[1] += result[1]
        return acc
    }, [0, 0]);
}