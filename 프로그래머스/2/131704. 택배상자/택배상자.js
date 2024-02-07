function solution(order) {
    let answer = 0;
    let index = 0;
    const subContainer = []
    
    for (let i = 1; i <= order.length; i++) {
        subContainer.push(i)
        while (subContainer.at(-1) === order[index] && subContainer.length > 0) {
            subContainer.pop()
            index++
            answer++
        }
    }

    return answer;
}