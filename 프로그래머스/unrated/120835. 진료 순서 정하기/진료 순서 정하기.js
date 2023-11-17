function solution(emergency) {
    const temp = [...emergency]
    const sortedEmergency = temp.sort((a, b) => b - a)
    const answer = emergency.map((el) => sortedEmergency.indexOf(el) + 1)
    
    return answer;
}