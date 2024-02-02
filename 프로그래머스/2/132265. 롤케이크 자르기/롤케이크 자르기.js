function solution(topping) {
    let answer = 0
    const toppingCount = new Set(topping).size
    const leftCake = new Array(topping.length + 1).fill(0)
    const rightCake = new Array(topping.length + 1).fill(0)
    
    const leftTopping = new Set()
    const rightTopping = new Set()
    for (let i = 0, j = topping.length - 1; i < topping.length; i++, j--) {
        leftTopping.add(topping[i])
        rightTopping.add(topping[j])
        leftCake[i + 1] = leftTopping.size
        rightCake[j] = rightTopping.size
    }
    
    leftCake.forEach((el, i) => {
        if (el === rightCake[i]) answer++
    })
    return answer;
}