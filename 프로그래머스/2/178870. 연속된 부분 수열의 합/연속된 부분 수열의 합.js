function solution(sequence, k) {
    const answer = [];
    let left = 0;
    let right = 0;
    let sum = sequence[left]
    while(left <= right && left < sequence.length) {
        if (sum === k) {
            answer.push([left, right])
            sum -= sequence[left]
            left++
        } else if (sum < k) {
            if (right === sequence.length - 1) {
                sum -= sequence[++left]
            } else {
                sum += sequence[++right]
            }
        } else if (sum > k) {
            sum -= sequence[left++]
        }
    }
    
    answer.sort((a, b) => {
        const numA = a[1] - a[0]
        const numB = b[1] - b[0]
        if (numA === numB) return a[0] - b[0]
        else return numA - numB
    })
    
    return answer[0];
}