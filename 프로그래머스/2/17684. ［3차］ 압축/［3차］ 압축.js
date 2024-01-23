function solution(msg) {
    var answer = [];
    const dictionary = {}
    for (let i = "A".charCodeAt(), j = 0; i <= "Z".charCodeAt(); i++, j++) {
        dictionary[String.fromCharCode(i)] = j + 1
        dictionary.last = j + 1
    }
    
    let prev = ""
    let cur = ""
    let index = 0
    while (index < msg.length) {
        prev = cur
        cur += msg[index]
        if (!(cur in dictionary)) {
            answer.push(dictionary[prev])
            dictionary[cur] = dictionary.last + 1
            dictionary.last += 1
            cur = ""
            continue
        }
        
        if (index === msg.length - 1) {
            answer.push(dictionary[cur])
            break
        }
        
        index++
    }

    return answer;
}