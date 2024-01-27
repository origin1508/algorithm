function solution(fees, records) {
    const timeRecords = new Map();
    const inRecords = new Map();
    
    const getUsage = (start, end, carNumber) => {
        const startTime = start.split(":")
        const endTime = end.split(":")
        const totalMinute = (endTime[0] - startTime[0]) * 60 + (endTime[1] - startTime[1])
        const prevTime = timeRecords.get(carNumber) || 0
        timeRecords.set(carNumber, prevTime + totalMinute)
    }
    
    let answer = [];
    for (let i = 0; i < records.length; i++) {
        const [time, carNumber, type] = records[i].split(" ")
        if (inRecords.has(carNumber)) {
            const start = inRecords.get(carNumber)
            inRecords.delete(carNumber)
            getUsage(start, time, carNumber)
        } else {
            inRecords.set(carNumber, time)
        }
    }
    
    if (inRecords.size > 0) {
        const it = inRecords.entries()
        let result = it.next()
        while (!result.done) {
            const [carNumber, time] = result.value
            getUsage(time, "23:59", carNumber)
            result = it.next()
        }
    }
    
    [...timeRecords.keys()].sort((a, b) => a - b).forEach(number => {
        if ((timeRecords.get(number) - fees[0]) < 0) {
            answer.push(fees[1])
        } else {
            answer.push(fees[1] + Math.ceil((timeRecords.get(number) - fees[0]) / fees[2]) * fees[3])
        }
    })
    return answer;
}