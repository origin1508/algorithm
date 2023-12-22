function solution(bandage, health, attacks) {
    let answer = health;
    let flag = true
    let time = 1
    let successTime = 0
    const [t, x, y] = bandage
    
    attacks.forEach(attack => {
        const [attackTime, attackPower] = attack
        for (time; time < attackTime; time++) {
            successTime++
            answer += x
            if (successTime === t) {
                answer +=  y
                successTime = 0
            }
            answer = answer >= health ? health : answer
        }
        time++
        answer -= attackPower
        successTime = 0
        
        if (answer <= 0) flag = false
    })
    return flag ? answer : -1
}