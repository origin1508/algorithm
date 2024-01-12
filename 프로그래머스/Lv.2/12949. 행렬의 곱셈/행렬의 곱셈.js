function solution(arr1, arr2) {
    const answer = [];
    for (let row = 0; row < arr1.length; row++) {
        const arr = new Array()
        for (let i = 0; i < arr2[0].length; i++) {
            let sum = 0
            for (let j = 0; j < arr1[0].length; j++) {
                sum += arr1[row][j] * arr2[j][i]  
            }
            arr.push(sum)
        }
        answer.push(arr)
    }
    return answer;
}