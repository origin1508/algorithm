function solution(arr1, arr2) {
    var answer = arr1.map((el1, x) => {
        return el1.map((el2, y) => {
            return el2 += arr2[x][y]
        })
    })
    return answer;
}