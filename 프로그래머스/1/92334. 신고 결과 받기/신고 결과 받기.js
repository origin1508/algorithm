function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0)
    const reportCnt = new Array(id_list.length).fill(0)
    const idMap = id_list.reduce((acc, cur, idx) => {
        acc[cur] = idx
        return acc
    }, {})
    
    const reportSet = new Set(report)
    
    for (let i of reportSet) {
        const reported = i.split(" ")[1]
        reportCnt[idMap[reported]]++
    }
    
    for (let i of reportSet) {
        const [reporter, reported] = i.split(" ")
        if (reportCnt[idMap[reported]] >= k) {
            answer[idMap[reporter]]++
        }
    }
    return answer;
}