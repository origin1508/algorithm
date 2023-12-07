function solution(a, b) {
    var answer = ["SUN","MON",'TUE','WED','THU','FRI',"SAT"]
    const dateOfWeek = new Date(`2016-${a}-${b}`).getDay()
    return answer[dateOfWeek];
}