function solution(queue1, queue2) {
    const getSum = (arr) => arr.reduce((acc, cur) => acc += cur, 0);
    var answer = 0;
    let sum1 = getSum(queue1)
    let sum2 = getSum(queue2)
    let idx1 = 0;
    let idx2 = 0;
    let limit = (queue1.length * 3) - 1
    const total = sum1 + sum2
    if (total % 2 === 1) return -1;
    
    const half = total / 2
    while (sum1 !== sum2) {
        if (sum1 > sum2) {
            const el = queue1[idx1];
            queue2.push(el)
            idx1++
            sum1 -= el
            sum2 += el
        } else if (sum2 > sum1) {
            const el = queue2[idx2];
            queue1.push(el)
            idx2++
            sum1 += el
            sum2 -= el
        }
        answer++
        limit--
        if (limit === 0) {
            answer = -1;
            break;
        }
    }
    return answer;
}