function solution(record) {
    const nickname = new Map();
    const notice = {Enter: "들어왔습니다.", Leave: "나갔습니다."}
    const access = [];
    const answer = [];
    
    for (let i = 0; i < record.length; i++) {
        const [type, id, name] = record[i].split(" ")
        if (type === "Change") {
            nickname.set(id, name)
            continue
        }
        
        if (type === "Enter") {
            nickname.set(id, name)
        }
        
        access.push([type, id])
    }
    
    for (let i = 0; i < access.length; i++) {
        const [type, id] = access[i]
        const message = `${nickname.get(id)}님이 ${notice[type]}`
        answer.push(message)
    }
    
    
    return answer;
}