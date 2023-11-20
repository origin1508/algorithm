function solution(participant, completion) {
    var answer = '';
    const participantMap = new Map()

    participant.forEach((el) => {
        if (participantMap.has(el)) {
            participantMap.set(el, participantMap.get(el) + 1)
        } else {
            participantMap.set(el, 1)
        }
    })
    
    completion.forEach((el) => {
        participantMap.set(el, participantMap.get(el) - 1)
        if (participantMap.get(el) === 0) participantMap.delete(el);
    })
    
    answer = [...participantMap][0][0]
    return answer;
}