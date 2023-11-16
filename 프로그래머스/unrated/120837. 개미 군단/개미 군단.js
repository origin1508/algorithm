function solution(hp) {
    const attacks = [5, 3, 1]
    let remainingHp = hp
    var answer = 0
    attacks.forEach(attack => {
        answer += Math.floor(remainingHp / attack)
        remainingHp %= attack
    })
    return answer;
}