function solution(dartResult) {
    var answer = []
    let temp = 0;
    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            const point = Number(dartResult[i])
            if (point === 0 && temp === 1) {
                temp = 10
                continue
            }
            temp = point
        } else {
            const bonus = dartResult[i]
            switch (bonus) {
                case "S":{
                    answer.push(temp)
                    break
                }
                    
                case "D":{
                    temp **= 2
                    answer.push(temp)
                    break
                }
                    
                case "T":{
                    temp **= 3
                    answer.push(temp)
                    break
                }
                    
                case "*":{
                    const now = answer.pop()
                    const pre = answer.pop()
                    answer.push(pre * 2)
                    answer.push(now * 2)
                    break
                }
                    
                case "#":{
                    const now = answer.pop()
                    answer.push(now * -1)
                    break
                }
                    
            }
            temp = 0;
        }
    }
    answer = answer.reduce((acc, cur) =>  isNaN(cur) ? acc : acc += cur ,0)
    return answer;
}