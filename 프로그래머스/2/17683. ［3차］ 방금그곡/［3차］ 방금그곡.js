function getMinute(time) {
    const [hour, minute] = time.split(":").map(el => parseInt(el))
    
    return hour * 60 + minute
}

function replaceSharp(melody) {
    const sharp = ["C#", "D#", "F#", "G#", "A#", "B#"]
    const lower = ["c", "d", "f", "g", "a", "b"]
    let result = melody;
    
    for (let i = 0; i < sharp.length; i++) {
        const reg = new RegExp(sharp[i], "g")
        result = result.replace(reg, lower[i])
    }
    return result
}

function solution(m, musicinfos) {
    let answer = [];
    const replacedM = replaceSharp(m)
    
    for (let i = 0; i < musicinfos.length; i++) {
        const [start, end, title, melody] = musicinfos[i].split(",")
        const time = getMinute(end) - getMinute(start)
        const replacedMelody = replaceSharp(melody)
        const length = replacedMelody.length
    
        if ((replacedMelody.repeat(Math.floor(time / length)) + replacedMelody.slice(0, time % length)).match(replacedM)) {
            answer.push([title, time, i])
        }
    }
    
    answer.sort((a, b) => {
        const timeA = a[1]
        const timeB = b[1]
        if (timeA === timeB) return a[2] - b[2]
        return timeB - timeA
    })

    return answer[0] ? answer[0][0] : "(None)";
}